import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CardMedia,
  Button,
  Theme,
  createStyles,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ProductDialog } from "../components/ProductDialog";
import { Product } from "../data";

export const AdminPage = () => {
  const { inventoryArray, removeProduct } = useContext(InventoryContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [chosenProduct, setChosenProduct] = useState<Partial<Product>>({});
  const classes = useStyles();

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  return (
    <Container className={classes.MainStyle}>
      <div className={classes.centerDiv}>
              <Button onClick={() => {
                  handleOpen();
                  setChosenProduct({});
              }}  variant="contained" color="primary">
          Lägg till ny produkt
        </Button>
      </div>
      <ProductDialog open={dialogOpen} closedDialog={handleClose} product={chosenProduct as Product} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell 
              className={`${classes.TableStyle} ${classes.imageStyle}`}
            ></TableCell>
            <TableCell className={classes.TableStyle}>Namn</TableCell>
            <TableCell className={classes.TableStyle}>Pris</TableCell>
            <TableCell className={classes.TableStyle}>Ta bort</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryArray.map((product) => (
            <TableRow key={product.id}>
              <TableCell  className={`${classes.imageStyle}`}>
                <div className={`${classes.maxHeight}`}>
                  <CardMedia
                    className={`${classes.media}`}
                    image={product.imageUrl}
                  />
                </div>
              </TableCell>
              <TableCell onClick={() => {
                    handleOpen();
                    setChosenProduct( product );
                  }} 
                  className={`${classes.cellPadding} ${classes.pointer}`}>
                <div className={`${classes.nameStyle}`}>{product.name}</div>
              </TableCell>
              <TableCell className={classes.cellPadding}>
                {product.price}
              </TableCell>
              <TableCell className={classes.cellPadding}>
                <Button
                  onClick={() => removeProduct(product)}
                  className={classes.arrowButtonStyle}
                >
                  <DeleteForeverIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MainStyle: {
      marginTop: "5rem",
      maxWidth: "62.5rem",
      padding: "5px",
    },
    TableStyle: {
      fontWeight: "bold",
      padding: "5px",
      textAlign: "left",
    },
    media: {
      paddingTop: "100%", // 16:9
    },
    amountArrowStyle: {
      whiteSpace: "nowrap",
    },
    arrowButtonStyle: {
      padding: "0",
      whiteSpace: "nowrap",
      minWidth: "20px",
    },
    imageStyle: {
      minWidth: "2rem",
      maxWidth: "5rem",
    },
    nameStyle: {
      wordBreak: "break-word",
      display: "-webkit-box",
      lineClamp: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      boxOrient: "vertical",
    },
    cellPadding: {
      padding: "5px",
    },
    priceStyle: {
      padding: "0",
    },
    maxHeight: {
      maxWidth: "3rem",
      paddingLeft: "30%",
    },
    centerDiv: {
      display: "flex",
      justifyContent: "center"
    },
    pointer: {
        cursor: "pointer",
    }
  })
);
