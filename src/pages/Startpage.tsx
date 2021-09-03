// import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useContext } from 'react';
import { HeaderBar } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import { productArray } from '../data';

const StartPage = () => {
    const { shoppingCart } = useContext(CartContext);
    
    console.log(shoppingCart);

    return (
        <div>
            <HeaderBar />
            <ProductGrid />
        </div>
    )
}

const ProductGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.root + ' ' + classes.contentPadding}>
            <Grid container spacing={3} className={`${classes.contentMargin}`}>
                {productArray.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        contentPadding: {
            padding: theme.spacing(2),
        },
        contentMargin: {
            marginTop: '4rem'
        },
    }));

    export default StartPage;