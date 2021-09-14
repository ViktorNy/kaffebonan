import { Table, TableHead, TableRow, TableCell, TableBody, CardMedia, makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ProductDialog } from "../components/ProductDialog";


export const AdminPage = () => {
    
    const { inventoryArray, removeProductFromInventory } = useContext(InventoryContext);
    const [dialogOpen, setDialogOpen] = useState(false);
    
    const classes = useStyles();
    
    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };
    
    return (
        <div className={classes.MainStyle}>
            <Button variant="contained" color="primary" type="submit" onClick={handleDialogClickOpen}>
                Ny Produkt
            </Button>
            <ProductDialog open={dialogOpen} closeDialog={handleDialogClose}/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={`${classes.TableStyle} ${classes.imageStyle}`}></TableCell>
                        <TableCell className={classes.TableStyle}>Namn</TableCell>
                        <TableCell className={classes.TableStyle}>Pris</TableCell>
                        <TableCell className={classes.TableStyle}>Info</TableCell>
                        <TableCell className={classes.TableStyle}>Ta bort</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inventoryArray.map((product) => (
                        <TableRow>
                            <TableCell className={`${classes.imageStyle}`}>
                                <CardMedia className={`${classes.media}`} image={product.imageUrl} />
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
                                <Button onClick={() => removeProductFromInventory(product)} className={classes.arrowButtonStyle}>
                                    <DeleteForeverIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        MainStyle: {
            marginTop: '4rem',
            maxWidth: '62.5rem',
            padding: '5px'
        },
        TableStyle: {
            fontWeight: 'bold',
            padding: '5px'
        },
        media: {
            paddingTop: '100%', // 16:9
        },
        amountArrowStyle: {
            whiteSpace: 'nowrap'
        },
        arrowButtonStyle: {
            padding: '0',
            whiteSpace: 'nowrap',
            minWidth: '20px'
        },
        imageStyle: {
            minWidth: '2rem',
            maxWidth: '5rem',
        },
        tableWidth: {
            maxWidth: '62,5rem'
        },
        nameStyle: {
            wordBreak: 'break-word',
            display: '-webkit-box',
            lineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '2.5rem',
            boxOrient: 'vertical',
        },
        cellPadding: {
            padding: '5px'
        },
        priceStyle: {
            padding: '0'
        },
        pointer:{
            cursor:'pointer'
        }
    }));