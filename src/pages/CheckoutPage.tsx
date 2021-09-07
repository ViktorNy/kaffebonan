import React from 'react';
import { CheckOutTable } from '../components/CheckOutTable';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import OrderForm from '../components/OrderForm';

export const CheckoutPage = () => {
    return (
        <div>
            <CheckOutTable/>
            {/* <div>
                <TextField required id="email-required" label="E-Mail" variant="outlined" type="email"/>
                <TextField required id="phone-required" label="Phone number" variant="outlined"/>
                <TextField required id="firstName-required" label="First name" variant="outlined"/>
                <TextField required id="lastName-required" label="Last name" variant="outlined"/>
                <TextField required id="address-required" label="Address" variant="outlined"/>
                <TextField required id="zip-required" label="Zip-code" variant="outlined"/>
                <TextField required id="city-required" label="City" variant="outlined"/>
                <Button>Confirm and order!</Button>
            </div> */}
            <OrderForm/>
        </div>
    )   
}