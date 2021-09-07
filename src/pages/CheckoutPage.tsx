import React from 'react';
import { CheckOutTable } from '../components/CheckOutTable';
import OrderForm from '../components/OrderForm';

export const CheckoutPage = () => {
    return (
        <div>
            <CheckOutTable/>
            <OrderForm/>
        </div>
    )   
}