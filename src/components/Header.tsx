import { AppBar, Toolbar, Typography, Button, createStyles, makeStyles, Theme } from '@material-ui/core';
// import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
        }, headerColor: {
            background: '#8A624A'
        }
    }));

export const HeaderBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.headerColor}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Kaffebönan
                    </Typography>
                    <Button color="inherit">
                        <ShoppingCartIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}