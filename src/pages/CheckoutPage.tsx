import { makeStyles, createStyles, Theme } from '@material-ui/styles';
import { Theme } from 'pretty-format';
import React, { useContext, CSSProperties } from 'react';

import { CheckOutTable } from '../components/CheckOutTable';
import OrderForm from '../components/OrderForm';
import { CartContext } from '../context/CartContext';

export const CheckoutPage = () => {

    const classes = useStyles();

    const { shoppingCart } = useContext(CartContext);

    if (shoppingCart.length > 0) {
        return (
            <div style={rootStyle}>
            <CheckOutTable />
            <div>
                <OrderForm />
            </div>

        </div>
    }
    else {
        return (
            < div className={classes.MainStyle}> Nothing in the basket </div>
        )
    }
}

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        MainStyle: {
            marginTop: '5rem'
        }
        root: {
            flexGrow: 1,
        },
        contentPadding: {
            padding: theme.spacing(2),
        },
        contentMargin: {
            marginTop: '4rem'
        },
    }));