import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useContext } from 'react';
import { HeaderBar } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { InventoryContext } from '../context/InventoryContext';

const StartPage = () => {

    return (
        <div>
            <HeaderBar />
            <ProductGrid />
        </div>
    )
}

const ProductGrid = () => {
    const {inventoryArray} = useContext(InventoryContext);
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${classes.contentPadding}`}>
            <Grid container spacing={3} className={`${classes.contentMargin}`}>
                {inventoryArray.map((product) => (
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
        }
    }));

export default StartPage;