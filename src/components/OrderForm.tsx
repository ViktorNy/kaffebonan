import React, { FormEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Redirect } from 'react-router-dom';


const defaultValues = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: ""
};

const OrderForm = () => {

    const [formValues, setformValues] = useState(defaultValues);
    const [doRedirect, setDoRedirect] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setDoRedirect(true);
    };


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="E-mail"
                variant="filled"
                required
                type="email"
                value={formValues.email}
                onChange={e => {
                    setformValues({ ...formValues, email: e.target.value })
                }}
            />
            <TextField
                label="First Name"
                variant="filled"
                required
                value={formValues.firstName}
                onChange={e => {
                    setformValues({ ...formValues, firstName: e.target.value })
                }}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={formValues.lastName}
                onChange={e => {
                    setformValues({ ...formValues, lastName: e.target.value })
                }}
            />
            <TextField
                label="Address"
                variant="filled"
                required
                value={formValues.address}
                onChange={e => {
                    setformValues({ ...formValues, address: e.target.value })
                }}
            />
            <TextField
                label="Zip Code"
                variant="filled"
                required
                value={formValues.zipCode}
                inputProps={{ pattern: "[0-9]*", minLength: 5, maxLength: 5 }}
                onChange={e => {
                    setformValues({ ...formValues, zipCode: e.target.value.toString() })
                }}
            />
            <TextField
                label="City"
                variant="filled"
                required
                value={formValues.city}
                onChange={e => {
                    setformValues({ ...formValues, city: e.target.value })
                }}
            />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
            {doRedirect && <Redirect to="/confirmation"/>}
        </form>
    );
};
export default OrderForm;