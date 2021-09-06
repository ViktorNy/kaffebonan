import React, { useContext } from 'react';
import { CheckOutTable } from '../components/CheckOutTable';
import { CartContext } from '../context/CartContext';

export const CheckoutPage = () => {
    const {shoppingCart} = useContext(CartContext);
    console.log(shoppingCart);

    return (
        <CheckOutTable/>
    )   
}