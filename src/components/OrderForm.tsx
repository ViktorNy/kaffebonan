import React, { FormEvent, useContext, useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const defaultValues = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: ""
};

const OrderForm = () => {

    const { emptyCart } = useContext(CartContext);

    const classes = useStyles();

    const [formValues, setformValues] = useState(defaultValues);
    const [doRedirect, setDoRedirect] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setDoRedirect(true);
        emptyCart();
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.outerFormMargin}>
                <TextField
                    className={classes.formmargin}
                    style={{ width: "95%" }}
                    label="E-mail"
                    variant="filled"
                    required
                    type="email"
                    value={formValues.email}
                    onChange={e => {
                        setformValues({ ...formValues, email: e.target.value })
                    }}
                />
            </div>
            <div>
                <TextField
                    className={classes.formmargin}
                    style={{ width: "45%" }}
                    label="First Name"
                    variant="filled"
                    required
                    value={formValues.firstName}
                    onChange={e => {
                        setformValues({ ...formValues, firstName: e.target.value })
                    }}
                />
                <TextField
                    className={classes.formmargin}
                    style={{ width: "45%" }}
                    label="Last Name"
                    variant="filled"
                    required
                    value={formValues.lastName}
                    onChange={e => {
                        setformValues({ ...formValues, lastName: e.target.value })
                    }}
                />
            </div>
            <div>
                <TextField
                    className={classes.formmargin}
                    label="Address"
                    variant="filled"
                    required
                    value={formValues.address}
                    onChange={e => {
                        setformValues({ ...formValues, address: e.target.value })
                    }}
                />
                <TextField
                    className={classes.formmargin}
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
                    className={classes.formmargin}
                    label="City"
                    variant="filled"
                    required
                    value={formValues.city}
                    onChange={e => {
                        setformValues({ ...formValues, city: e.target.value })
                    }}
                />
            </div>
            <div className={classes.center + ' ' + classes.contentMargin}>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
                {doRedirect && < Redirect to="/confirmation" />}
            </div>

        </form>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentMargin: {
            margin: "2rem"
        },
        center: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        formmargin: {
            margin: "1rem"
        },
        outerFormMargin: {
            marginTop: "3rem"
        }
    }));


export default OrderForm;