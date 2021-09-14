import React, { FormEvent, useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const defaultValues = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: ''
};

const regEx = {
    email: /^(?!.*\.{2})[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    onlyLetters: /^[\p{L}' ][\p{L}' -]*[\p{L}' ]$/u,
    lettersAndNumbers: /^[\p{L}'][ \p{L}'-]*[0-9\p{L} ]+$/u,
    zipCode: /(?:^|\D)(\d{5})(?!\d)/g,
    phoneNumber: /^\s*(?:\+?(\d{1,3}))?[ (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
};

const errorMessages = {
    emailErrorMsg: '',
    PhoneNumberErrorMsg: '',
    firstNameErrorMsg: '',
    lastNameErrorMsg: '',
    addressErrorMsg: '',
    zipCodeErrorMsg: '',
    cityErrorMsg: ''
}

const OrderForm = () => {

    const { shoppingCart, emptyCart } = useContext(CartContext);

    const classes = useStyles();

    const [formValues, setformValues] = useState(defaultValues);
    const [doRedirect, setDoRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState(errorMessages);
    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const validateField = (value: string, type: string) => {
        let reg;

        switch (type) {
            case 'email':
                reg = new RegExp(regEx.email).test(value);
                reg ? setErrorMessage({ ...errorMessage, emailErrorMsg: '' }) : setErrorMessage({ ...errorMessage, emailErrorMsg: 'Inte en epostadress' });
                break;
            case 'firstName':
                reg = new RegExp(regEx.onlyLetters).test(value);
                reg ? setErrorMessage({ ...errorMessage, firstNameErrorMsg: '' }) : setErrorMessage({ ...errorMessage, firstNameErrorMsg: 'Skriv endast bokstäver' });
                break;
            case 'lastName':
                reg = new RegExp(regEx.onlyLetters).test(value);
                reg ? setErrorMessage({ ...errorMessage, lastNameErrorMsg: '' }) : setErrorMessage({ ...errorMessage, lastNameErrorMsg: 'Skriv endast bokstäver' });
                break;
            case 'address':
                reg = new RegExp(regEx.lettersAndNumbers).test(value);
                reg ? setErrorMessage({ ...errorMessage, addressErrorMsg: '' }) : setErrorMessage({ ...errorMessage, addressErrorMsg: 'Ogiltiga symboler' });
                break;
            case 'city':
                reg = new RegExp(regEx.lettersAndNumbers).test(value);
                reg ? setErrorMessage({ ...errorMessage, cityErrorMsg: '' }) : setErrorMessage({ ...errorMessage, cityErrorMsg: 'Skriv endast bokstäver' });
                break;
            case 'zipCode':
                reg = new RegExp(regEx.zipCode).test(value);
                reg ? setErrorMessage({ ...errorMessage, zipCodeErrorMsg: '' }) : setErrorMessage({ ...errorMessage, zipCodeErrorMsg: 'Postnummer måste vara 5 siffror' });
                break;
            case 'phone number':
                reg = new RegExp(regEx.phoneNumber).test(value);
                reg ? setErrorMessage({ ...errorMessage, PhoneNumberErrorMsg: '' }) : setErrorMessage({ ...errorMessage, PhoneNumberErrorMsg: 'Ogiltigt telefonnummer' });
                break;

            default:
                break;
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (Object.values(errorMessage).every(value => value === '')) {
            if (shoppingCart.length > 0) {
                setDoRedirect(true);
                emptyCart();
            }
            else {
                setOpen(true);
                setAlertMsg('Vagnen är tom');
            }
        }
        else {
            setOpen(true);
            setAlertMsg('Ogiltiga värden');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.formMargin}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='E-mail'
                            fullWidth
                            label='E-mail'
                            variant='outlined'
                            required
                            type='email'
                            value={formValues.email}
                            onChange={e => {
                                validateField(e.target.value, 'email');
                                setformValues({ ...formValues, email: e.target.value })
                            }}
                            error={errorMessage.emailErrorMsg !== ''}
                            helperText={errorMessage.emailErrorMsg}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='PhoneNumber'
                            fullWidth
                            label='Mobilnummer'
                            variant='outlined'
                            required
                            type='phone number'
                            value={formValues.phoneNumber}
                            onChange={e => {
                                validateField(e.target.value, 'phone number');
                                setformValues({ ...formValues, phoneNumber: e.target.value })
                            }}
                            error={errorMessage.PhoneNumberErrorMsg !== ''}
                            helperText={errorMessage.PhoneNumberErrorMsg}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='First'
                            fullWidth
                            label='Förnamn'
                            variant='outlined'
                            required
                            value={formValues.firstName}
                            onChange={e => {
                                validateField(e.target.value, 'firstName');
                                setformValues({ ...formValues, firstName: e.target.value })
                            }}
                            error={errorMessage.firstNameErrorMsg !== ''}
                            helperText={errorMessage.firstNameErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id='Last'
                            fullWidth
                            label='Efternamn'
                            variant='outlined'
                            required
                            value={formValues.lastName}
                            onChange={e => {
                                validateField(e.target.value, 'lastName');
                                setformValues({ ...formValues, lastName: e.target.value })
                            }}
                            error={errorMessage.lastNameErrorMsg !== ''}
                            helperText={errorMessage.lastNameErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id='Address'
                            fullWidth
                            label='Adress'
                            variant='outlined'
                            required
                            value={formValues.address}
                            onChange={e => {
                                validateField(e.target.value, 'address');
                                setformValues({ ...formValues, address: e.target.value })
                            }}
                            error={errorMessage.addressErrorMsg !== ''}
                            helperText={errorMessage.addressErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id='Zip-Code'
                            fullWidth
                            label='Postnummer'
                            variant='outlined'
                            required
                            value={formValues.zipCode}
                            onChange={e => {
                                validateField(e.target.value, 'zipCode');
                                setformValues({ ...formValues, zipCode: e.target.value })
                            }}
                            error={errorMessage.zipCodeErrorMsg !== ''}
                            helperText={errorMessage.zipCodeErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id='City'
                            fullWidth
                            label='Stad'
                            variant='outlined'
                            required
                            value={formValues.city}
                            onChange={e => {
                                validateField(e.target.value, 'city');
                                setformValues({ ...formValues, city: e.target.value })
                            }}
                            error={errorMessage.cityErrorMsg !== ''}
                            helperText={errorMessage.cityErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.center}>
                        <Button variant='contained' color='primary' type='submit'>
                            Bekräfta beställning
                        </Button>
                        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                            <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='error'>
                                {alertMsg}
                            </MuiAlert>
                        </Snackbar>
                        {doRedirect && < Redirect to='/confirmation' />}
                    </Grid>
                </Grid>
            </div >
        </form >
    );
};

export default OrderForm;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentMargin: {
            marginTop: '2rem'
        },
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        formMargin: {
            margin: '10%',
            maxWidth: '1000px'
        },
        outerFormMargin: {
            margin: '25%',
            maxWidth: '200px'
        },
        maxwidth: {
            maxWidth: '75%'
        },
        Grid: {
            display: 'inline-grid'
        }
    }));