import { Card, CardContent, CardMedia, Typography, makeStyles, createStyles, Theme, Button, Grid } from '@material-ui/core';
import { FC, useContext } from 'react';
import { Product } from '../data';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from '../context/CartContext';

interface Props {
    product: Product;
}

export const ProductCard: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const url = `/product/${props.product.id}`;

    const { addToCart } = useContext(CartContext);

    return (
        <Grid item xs={'auto'} sm={3}>
            <Card className={classes.cardContainerHeight}>
                <CardContent>
                    <Link to={url}>
                        <CardMedia className={`${classes.media} ${classes.pointer}`} image={props.product.imageUrl} />
                        <Typography >{props.product.name}</Typography>
                    </Link>
                    <div className={`${classes.flex} ${classes.spaceBetween}`}>
                        <p>Pris {props.product.price} kr</p>
                        <Button onClick={() => addToCart(props.product)}>
                            <AddShoppingCartIcon />
                        </Button>
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