import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFound = () => {

    const classes = useStyles();

    return (
        <div className={classes.mainStyle}>
            <h1 className={`${classes.contentMargin} ${classes.fontStyle}`}>404 - Kaffe ej hittat</h1>
            <Link to='/' className={classes.textdecoration}>
                <Button className={`${classes.contentMargin} ${classes.buttonMargin}`} variant='contained' color='primary' type='submit'>
                    Till Startsidan
                </Button>
            </Link>
        </div>
    )
}

export default NotFound;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainStyle: {
            marginTop: '10rem',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        },
        contentMargin: {
            margin: '1rem'
        },
        textdecoration: {
            textDecoration: 'none'
        },
        fontStyle: {
            fontweight: '900',
            fontFamily: 'sans-serif',
            textAlign: 'center'
        },
        buttonMargin: {
            marginTop: '5rem'
        },
    }));