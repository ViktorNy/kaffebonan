import { Button, createStyles, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme } from '@material-ui/core';
import { useContext } from 'react';
import { CartContext, ShoppingItem } from '../context/CartContext';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const addTotal = (shoppingCart: ShoppingItem[])  => {
    let totalPrice = 0;
    shoppingCart.map((item) =>
       totalPrice += item.product.price * item.amount
    )
    return totalPrice   
}

export const CheckOutTable = () => {
    const {shoppingCart, addToCart, removeFromCart} = useContext(CartContext);
    const totalPrice = addTotal(shoppingCart);
    
    const classes = useStyles();
    
    return (
        <Table className={classes.MainStyle}>
        <TableHead>
        <TableRow>
            <TableCell className={classes.TableStyle}>Product Name</TableCell>
            <TableCell className={classes.TableStyle}>Unit price</TableCell>
            <TableCell className={classes.TableStyle}>Amount</TableCell>
            <TableCell className={classes.TableStyle}>Total</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {shoppingCart.map((shoppingItem) => (
            <TableRow>
                <TableCell>
                    {shoppingItem.product.name}
                </TableCell>
                <TableCell>
                    {shoppingItem.product.price}
                </TableCell>
                <TableCell>
                    <Button onClick={() => {
                        removeFromCart(shoppingItem.product)
                    }}>
                        <ArrowLeftIcon />
                    </Button>
                    {shoppingItem.amount}
                    <Button onClick={() => addToCart(shoppingItem.product)}>
                        <ArrowRightIcon />
                    </Button>
                </TableCell>
                <TableCell>
                    {shoppingItem.amount * shoppingItem.product.price}
                </TableCell>
            </TableRow>
        ))}
        <TableRow>
            <TableCell colSpan={2}/>
           
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
        }, TableStyle: {
            fontWeight: 'bold'
        },
    }));
