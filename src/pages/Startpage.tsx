// import { Theme } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderBar } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

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

export interface Product {
    id: string;
    name: string;
    info: string;
    price: number;
    imageUrl: string;
}

const productArray: Product[] = [
    { id: '1', name: 'Gamle gunnars grodbönor', info: 'Gött kaffe', price: 200, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '2', name: 'Rasmus Rhodosbönor?', info: 'oGött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '3', name: 'Nils nigerianska bönor', info: 'oGött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '4', name: 'Eriks eritreanska bönor', info: 'oGött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '5', name: 'Viktors Venezuelabönor', info: 'oGött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '6', name: 'Davids Dumplingbönor', info: 'oGött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '7', name: 'Helmuts Hittebönor', info: 'Gött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' },
    { id: '8', name: 'Gustavs Granatgröna bönor', info: 'Gött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' }
]

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