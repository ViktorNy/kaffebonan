import {Table, TableHead, TableRow, TableCell, TableBody, CardMedia, Button, Theme, createStyles} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ProductDialog } from "../components/ProductDialog";

export const AdminPage = () => {
  const { inventoryArray, removeProduct } = useContext(InventoryContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
      setDialogOpen(true);
  }

  return (
      <div className={classes.MainStyle}>
          <Button onClick={handleOpen}>
                Lägg till ny produkt
          </Button>
        <ProductDialog open={dialogOpen} closedDialog={handleClose}/>
    <Table className={classes.MainStyle}>
      <TableHead>
        <TableRow>
          <TableCell
            className={`${classes.TableStyle} ${classes.imageStyle}`}
          ></TableCell>
          <TableCell className={classes.TableStyle}>Namn</TableCell>
          <TableCell className={classes.TableStyle}>Pris</TableCell>
          <TableCell className={classes.TableStyle}>Info</TableCell>
          <TableCell className={classes.TableStyle}>Ta bort</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {inventoryArray.map((product) => (
          <TableRow key={product.id}>
            <TableCell className={`${classes.imageStyle}`}>
              <div className={`${classes.maxHeight}`}>
                <CardMedia
                  className={`${classes.media}`}
                  image={product.imageUrl}
                />
              </div>
            </TableCell>
            <TableCell className={classes.cellPadding}>
              <div className={`${classes.nameStyle}`}>{product.name}</div>
            </TableCell>
            <TableCell className={classes.cellPadding}>
              {product.price}
            </TableCell>
            <TableCell className={classes.cellPadding}>
              {product.info}
            </TableCell>
            <TableCell className={classes.cellPadding}>
              <Button onClick={() => removeProduct(product)} className={classes.arrowButtonStyle}>
                <DeleteForeverIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MainStyle: {
      marginTop: "4rem",
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
  })
);
