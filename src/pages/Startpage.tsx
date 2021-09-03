// import { Theme } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderBar } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { productArray } from '../data';

const Startpage: FC = () => {
    return (
        <div>
            <HeaderBar />
            <ProductGrid />
        </div>
    )
}

const ProductGrid: FC = () => {
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

export default Startpage;