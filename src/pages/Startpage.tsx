// import { Theme } from '@material-ui/core';
import { AppBar, Button, Toolbar, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import { HeaderBar } from '../components/Header';
import { ProductCard } from '../components/ProductCard';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        contentPadding: {
            padding: theme.spacing(2),
        },
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
        contentMargin: {
            marginTop: '4rem'
        },
        cardContainerHeight: {
            minHeight: '300px'
        },
        gridWrap : {
            flexWrap: 'wrap'
        }
    }));

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
                    <Grid item xs={'auto'} sm={3}>
                        <ProductCard product={product} />
                    </Grid>
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
    { id: '5', name: 'Viktors Venezuelabönor', info: 'oGött kaffe', price: 300, imageUrl: 'https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png' }
]

export default Startpage;