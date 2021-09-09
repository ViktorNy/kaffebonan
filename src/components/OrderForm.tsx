import React, { FormEvent, useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
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
            <div className={classes.formMargin}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="E-mail"
                            variant="outlined"

                            required
                            type="email"
                            value={formValues.email}
                            onChange={e => {
                                setformValues({ ...formValues, email: e.target.value })
                            }}
                        />

                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            required
                            value={formValues.firstName}
                            onChange={e => {
                                setformValues({ ...formValues, firstName: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            required
                            value={formValues.lastName}
                            onChange={e => {
                                setformValues({ ...formValues, lastName: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                            fullWidth
                            label="Address"
                            variant="outlined"
                            required
                            value={formValues.address}
                            onChange={e => {
                                setformValues({ ...formValues, address: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                            fullWidth
                            label="Zip Code"
                            variant="outlined"
                            required
                            value={formValues.zipCode}
                            inputProps={{ pattern: "[0-9]*", minLength: 5, maxLength: 5 }}
                            onChange={e => {
                                setformValues({ ...formValues, zipCode: e.target.value.toString() })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                            fullWidth
                            label="City"
                            variant="outlined"
                            required
                            value={formValues.city}
                            onChange={e => {
                                setformValues({ ...formValues, city: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.center}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        {doRedirect && < Redirect to="/confirmation" />}
                    </Grid>
                </Grid>
            </div >
        </form >
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentMargin: {
            marginTop: "2rem"
        },
        center: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        formMargin: {
            margin: "10%",
            maxWidth: "1000px"
        },
        outerFormMargin: {
            margin: "25%",
            maxWidth: "200px"
        },
        maxwidth: {
            maxWidth: "75%"
        },
        Grid: {
            display: "inline-grid"
        }
    }));


export default OrderForm;