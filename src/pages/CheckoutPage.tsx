import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from 'pretty-format';
import React, { useContext } from 'react';
import { CheckOutTable } from '../components/CheckOutTable';
import OrderForm from '../components/OrderForm';
import { CartContext } from '../context/CartContext';

export const CheckoutPage = () => {

    const classes = useStyles();

    const { shoppingCart } = useContext(CartContext);

    if (shoppingCart.length > 0) {
        return (
            <div>
                <CheckOutTable />
                <OrderForm />
            </div>)
    }
    else {
        return (
            < div className={classes.MainStyle}> Nothing in the basket </div>
        )
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        MainStyle: {
            marginTop: '5rem'
        }
    }));