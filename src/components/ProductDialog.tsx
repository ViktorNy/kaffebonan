import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Grid,
  Theme,
  createStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FC, FormEvent, useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";
import { Product } from "../data";
import { v4 as uuidv4 } from "uuid";

interface Props {
  open: boolean;
  closedDialog: () => void;
}

export const ProductDialog: FC<Props> = ({ open, closedDialog }) => {
  const { addProduct } = useContext(InventoryContext);
  const [newProduct, setNewProduct] = useState<Product>({} as Product);
  const classes = useStyles();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    addProduct(newProduct);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={closedDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>

        <form onSubmit={handleSubmit}>
          <div className={classes.formMargin}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="Name"
                  fullWidth
                  label="Namn"
                  variant="outlined"
                  required
                  value={newProduct.name}
                  onChange={(e) => {
                    setNewProduct({ ...newProduct, name: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="Price"
                  fullWidth
                  label="Pris"
                  variant="outlined"
                  required
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      price: Number(e.target.value),
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="Info"
                  fullWidth
                  label="Info"
                  variant="outlined"
                  required
                  value={newProduct.info}
                  onChange={(e) => {
                    setNewProduct({ ...newProduct, info: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="imageUrl"
                  fullWidth
                  label="Bild Url"
                  variant="outlined"
                  required
                  value={newProduct.imageUrl}
                  onChange={(e) => {
                    setNewProduct({ ...newProduct, imageUrl: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} className={classes.center}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => {
                    setNewProduct({ ...newProduct, id: uuidv4() });
                    closedDialog();
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
    contentMargin: {
      marginTop: "2rem",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formMargin: {
      margin: "10%",
      maxWidth: "1000px",
    },
    outerFormMargin: {
      margin: "25%",
      maxWidth: "200px",
    },
    maxwidth: {
      maxWidth: "75%",
    },
    Grid: {
      display: "inline-grid",
    },
  })
);
