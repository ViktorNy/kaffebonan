import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CSSProperties} from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
// import { Typography } from '@material-ui/core/';

export const ConfirmationPage = () => {

    const classes = useStyles();

    return (
        <div style={rootStyle}>
            <div><CheckCircleIcon /></div>
            <div className={classes.contentMargin + ' ' + classes.fontSize}>Thank you for your purchase, your order is on the way.</div>
            <Link to='/' className={classes.textdecoration}>
                <Button className={classes.contentMargin + ' ' + classes.buttonMargin} variant="contained" color="primary" type="submit">
                    StartPage
                </Button>
            </Link>
        </div>
    )
}

const rootStyle: CSSProperties = {
    marginTop: "10rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentMargin: {
            marginTop: '1rem'
        },
        textdecoration: {
            textDecoration: "none"
        },
        fontSize: {
            fontweight: "bold"
        },
        buttonMargin: {
            marginTop: '5rem'
        },
    }));
