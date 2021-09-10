import { Card, CardContent, CardMedia, Typography, makeStyles, createStyles, Theme, Button, Grid } from '@material-ui/core';
import { FC, useContext, useState } from 'react';
import { Product } from '../data';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from '../context/CartContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface Props {
    product: Product;
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ProductCard: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const url = `/product/${props.product.id}`;
    const [open, setOpen] = useState(false);

    const { addToCart } = useContext(CartContext);

    const handleClick = () => {
        setOpen(true);
        addToCart(props.product);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Grid item xs={6} sm={3} lg={2}>
            <Card className={classes.cardContainerHeight}>
                <CardContent>
                    <Link to={url}>
                        <CardMedia className={`${classes.media} ${classes.pointer}`} image={props.product.imageUrl} />
                        <Typography >{props.product.name}</Typography>
                    </Link>
                    <div className={`${classes.flex} ${classes.spaceBetween}`}>
                        <p>Pris {props.product.price} kr</p>
                        <Button onClick={handleClick}>
                            <AddShoppingCartIcon />
                        </Button>
                        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                                {props.product.name} added to cart
                            </Alert>
                        </Snackbar>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 0,
            paddingTop: '100%', // 16:9
        },
        flex: {
            display: 'flex',
        },
        spaceBetween: {
            justifyContent: 'space-between'
        },
        cardContainerHeight: {
            minHeight: '300px'
        }, pointer: {
            cursor: 'pointer'
        }
    }));