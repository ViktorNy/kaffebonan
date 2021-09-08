import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { CSSProperties } from 'react';
import { CheckOutTable } from '../components/CheckOutTable';
import OrderForm from '../components/OrderForm';

export const CheckoutPage = () => {
    return (
        <div style={rootStyle}>
            <CheckOutTable />
            <div>
                <OrderForm />
            </div>

        </div>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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