import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { CheckOutTable } from '../components/CheckOutTable';
import OrderForm from '../components/OrderForm';

export const CheckoutPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainStyle}>
            <CheckOutTable />
            <OrderForm />
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainStyle: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }));