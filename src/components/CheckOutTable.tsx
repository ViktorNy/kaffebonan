import { Button, CardMedia, createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext, ShoppingItem } from '../context/CartContext';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const addTotal = (shoppingCart: ShoppingItem[])  => {
    let totalPrice = 0;
    shoppingCart.map((item) =>
       totalPrice += item.product.price * item.amount
    )
    return totalPrice   
}

export const CheckOutTable = () => {
    const { shoppingCart, addToCart, removeFromCart, removeAllOfSpecificProductFromCart} = useContext(CartContext);
    const totalPrice = addTotal(shoppingCart);
    
    const classes = useStyles();
    
    return (
        <Table className={classes.MainStyle}>
        <TableHead>
        <TableRow>
                    <TableCell className={`${classes.TableStyle} ${classes.imageStyle}`}></TableCell>
            <TableCell className={classes.TableStyle}>Product Name</TableCell>
            <TableCell className={classes.TableStyle}>Unit price</TableCell>
            <TableCell className={classes.TableStyle}>Amount</TableCell>
            <TableCell className={classes.TableStyle}>Total</TableCell>
            <TableCell className={classes.TableStyle}>Remove all</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {shoppingCart.map((shoppingItem) => (
            <TableRow>
                <TableCell className={`${classes.imageStyle}`}>
                    <CardMedia className={`${classes.media}`} image={shoppingItem.product.imageUrl} />
                </TableCell>
                <TableCell>
                    {shoppingItem.product.name}
                </TableCell>
                <TableCell>
                    {shoppingItem.product.price}
                </TableCell>
                <TableCell className={classes.amountArrowStyle}>
                    <Button onClick={() => removeFromCart(shoppingItem.product)} className={classes.arrowButtonStyle}>
                        <ArrowLeftIcon />
                    </Button>
                    {shoppingItem.amount}
                    <Button onClick={() => addToCart(shoppingItem.product)} className={classes.arrowButtonStyle}>
                        <ArrowRightIcon />
                    </Button>
                </TableCell>
                <TableCell>
                    {shoppingItem.amount * shoppingItem.product.price}
                </TableCell>
                <TableCell>
                    <Button onClick={() => removeAllOfSpecificProductFromCart(shoppingItem.product)}>
                        <DeleteForeverIcon />
                    </Button>
                </TableCell>
            </TableRow>
        ))}
        <TableRow>
            <TableCell colSpan={4}/>
           
            <TableCell className={classes.TableStyle}>
                Total Price
            </TableCell>
            <TableCell >
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
            marginTop: '4rem'
        }, 
        TableStyle: {
            fontWeight: 'bold'
        },
        media: {
            paddingTop: '100%', // 16:9
        },
        amountArrowStyle: {
            whiteSpace: 'nowrap'
        },
        arrowButtonStyle:{
            padding: '0',
            whiteSpace: 'nowrap',
            minWidth: '20px'
        },
        imageStyle:{
            minWidth: '3rem',
            maxWidth: '5rem'
        }
    }));
