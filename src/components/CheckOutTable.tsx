import { CSSProperties, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CheckOutTable = () => {
    const {shoppingCart} = useContext(CartContext);
    console.log(shoppingCart);

    return (
        <table style={rootStyle}>
        <thead>
        <tr>
            <th>Product Name</th>
            <th>Unit price</th>
            <th>Amount</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        {shoppingCart.map((shoppingItem) => (
            <tr>
                <td>
                    {shoppingItem.product.name}
                </td>
                <td>
                    {shoppingItem.product.price}
                </td>
                <td>
                    {shoppingItem.amount}
                </td>
                <td>
                    {shoppingItem.amount * shoppingItem.product.price}
                </td>
            </tr>
        ))}
    </tbody>
    </table>) 
}

const rootStyle: CSSProperties = {
    marginTop: '5rem'
}