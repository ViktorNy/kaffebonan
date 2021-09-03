import { AppBar, Toolbar, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
// import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../images/headerlogo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            display: 'flex'
        }, headerColor: {
            background: '#8A624A'
        }, logoStyle: {
            height: '3.9rem',
            alignItems: 'center'
        }
    }));

export const HeaderBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.headerColor}>
                <Toolbar>
                    <div className={`${classes.title}`}>
                        <img src={logo} alt='' className={`${classes.logoStyle}`} />
                    </div>
                    <Button color="inherit">
                        <ShoppingCartIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}