import {
  Button,
  Dialog,
  TextField,
  Grid,
  Theme,
  createStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";
import { Product } from "../data";
import { v4 as uuidv4 } from "uuid";

interface Props {
  open: boolean;
  closedDialog: () => void;
  product?: Product;
}

const regEx = {
  onlyLetters: /^[0-9\p{L}'][ \p{L}',.:-]*[0-9\p{L} ]+$/u,
  onlyNumbers: /^[0-9/d]/,
  onlyUrl: /^\S*$/
}

const errorMessages = {
  letterErrorMsg: '',
  numberErrorMsg: '',
  infoErrorMsg: '',
  urlErrorMsg: ''
}

export const ProductDialog: FC<Props> = ({ open, closedDialog, product }) => {
  const { addProduct } = useContext(InventoryContext);
  const [errorMessage, setErrorMessage] = useState(errorMessages);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});

  const classes = useStyles();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.values(errorMessage).every(value => value === '')) {
      addProduct(newProduct as Product);
      closedDialog();
    }
  };

  const validateField = (value: string, type: string) => {
    let reg;

    switch (type) {
      case 'name':
        reg = new RegExp(regEx.onlyLetters).test(value);
        reg ? setErrorMessage({ ...errorMessage, letterErrorMsg: '' }) : setErrorMessage({ ...errorMessage, letterErrorMsg: 'Ange ett giltigt namn' });
        break;
      case 'price':
        reg = new RegExp(regEx.onlyNumbers).test(value);
        reg ? setErrorMessage({ ...errorMessage, numberErrorMsg: '' }) : setErrorMessage({ ...errorMessage, numberErrorMsg: 'Ange ett giltigt pris' });
        break;
      case 'info':
        reg = new RegExp(regEx.onlyLetters).test(value);
        reg ? setErrorMessage({ ...errorMessage, infoErrorMsg: '' }) : setErrorMessage({ ...errorMessage, infoErrorMsg: 'Ange information i ett giltigt format' });
        break;
      case 'url':
        reg = new RegExp(regEx.onlyUrl).test(value);
        reg ? setErrorMessage({ ...errorMessage, urlErrorMsg: '' }) : setErrorMessage({ ...errorMessage, urlErrorMsg: 'Ange en giltig url' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (product) {
      setNewProduct(product);
    }
  }, [product]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={closedDialog}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <div className={classes.formMargin}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="Name"
                  fullWidth
                  label="Namn"
                  variant="outlined"
                  required
                  value={newProduct.name}
                  onChange={(e) => {
                    validateField(e.target.value, 'name');
                    setNewProduct({ ...newProduct, name: e.target.value });
                  }}
                  error={errorMessage.letterErrorMsg !== ''}
                  helperText={errorMessage.letterErrorMsg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Price"
                  fullWidth
                  label="Pris"
                  variant="outlined"
                  required
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => {
                    validateField(e.target.value, 'price');
                    setNewProduct({
                      ...newProduct,
                      price: Number(e.target.value),
                    });
                  }}
                  error={errorMessage.numberErrorMsg !== ''}
                  helperText={errorMessage.numberErrorMsg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Info"
                  fullWidth
                  label="Info"
                  variant="outlined"
                  required
                  value={newProduct.info}
                  onChange={(e) => {
                    validateField(e.target.value, 'info');
                    setNewProduct({ ...newProduct, info: e.target.value });
                  }}
                  error={errorMessage.infoErrorMsg !== ''}
                  helperText={errorMessage.infoErrorMsg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="imageUrl"
                  fullWidth
                  label="Bild Url"
                  variant="outlined"
                  required
                  value={newProduct.imageUrl}
                  onChange={(e) => {
                    validateField(e.target.value, 'url');
                    setNewProduct({ ...newProduct, imageUrl: e.target.value });
                  }}
                  error={errorMessage.urlErrorMsg !== ''}
                  helperText={errorMessage.urlErrorMsg}
                />
              </Grid>
              <Grid item xs={12} className={classes.center}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => {
                    if (!newProduct.id) setNewProduct({ ...newProduct, id: uuidv4() });
                  }}
                >
                  Spara
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formMargin: {
      margin: "5%",
      maxWidth: "1000px",
    }
  })
);