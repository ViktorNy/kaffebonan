import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {

    const classes = useStyles();

    return (
        <div style={rootStyle}>
            <div className={`${classes.contentMargin} ${classes.fontStyle}`}>404 Not Found</div>
            <Link to='/' className={classes.textdecoration}>
                <Button className={`${classes.contentMargin} ${classes.buttonMargin}`} variant='contained' color='primary' type='submit'>
                    Till Startsidan
                </Button>
            </Link>
        </div>
    )
}

export default NotFound;

const rootStyle: CSSProperties = {
    marginTop: '10rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentMargin: {
            margin: '1rem'
        },
        textdecoration: {
            textDecoration: 'none'
        },
        fontStyle: {
            fontweight: 'bolder',
            fontFamily: 'sans-serif'
        },
        buttonMargin: {
            marginTop: '5rem'
        },
    }));