import { Button, CardMedia, createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext, ShoppingItem } from '../context/CartContext';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const addTotal = (shoppingCart: ShoppingItem[]) => {
    let totalPrice = 0;
    shoppingCart.map((item) =>
        totalPrice += item.product.price * item.amount
    )
    return totalPrice
}

export const CheckOutTable = () => {
    const { shoppingCart, addToCart, removeFromCart, removeAllOfSpecificProductFromCart } = useContext(CartContext);
    const totalPrice = addTotal(shoppingCart);

    const classes = useStyles();

    return (
        <Table className={classes.MainStyle}>
            <TableHead>
                <TableRow>
                    <TableCell className={`${classes.TableStyle} ${classes.imageStyle}`}></TableCell>
                    <TableCell className={classes.TableStyle}>Namn</TableCell>
                    <TableCell className={classes.TableStyle}>Pris</TableCell>
                    <TableCell className={classes.TableStyle}>Antal</TableCell>
                    <TableCell className={classes.TableStyle}>Ta bort</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {shoppingCart.map((shoppingItem) => (
                    <TableRow>
                        <TableCell className={`${classes.imageStyle}`}>
                            <CardMedia className={`${classes.media}`} image={shoppingItem.product.imageUrl} />
                        </TableCell>
                        <TableCell className={classes.cellPadding}>
                            <div className={`${classes.nameStyle}`}>{shoppingItem.product.name}</div>

                        </TableCell>
                        <TableCell className={classes.cellPadding}>
                            {shoppingItem.product.price}
                        </TableCell>
                        <TableCell className={`${classes.amountArrowStyle} ${classes.cellPadding}`}>
                            <Button onClick={() => removeFromCart(shoppingItem.product)} className={classes.arrowButtonStyle}>
                                <ArrowLeftIcon />
                            </Button>
                            {shoppingItem.amount}
                            <Button onClick={() => addToCart(shoppingItem.product)} className={classes.arrowButtonStyle}>
                                <ArrowRightIcon />
                            </Button>
                        </TableCell>
                        <TableCell className={classes.cellPadding}>
                            <Button onClick={() => removeAllOfSpecificProductFromCart(shoppingItem.product)} className={classes.arrowButtonStyle}>
                                <DeleteForeverIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell colSpan={3} />
                    <TableCell className={classes.TableStyle}>
                        Totalpris
                    </TableCell>
                    <TableCell className={classes.priceStyle}>
                        {totalPrice}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
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
    }));