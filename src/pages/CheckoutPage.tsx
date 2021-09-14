
import { CSSProperties } from 'react';
import { CheckOutTable } from '../components/CheckOutTable';
import OrderForm from '../components/OrderForm';

export const CheckoutPage = () => {
    return (
        <div style={rootStyle}>
            <CheckOutTable />
            <OrderForm />
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}