import { Button, createStyles, makeStyles, Theme } from "@material-ui/core"
import { Product } from "../data"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface Props {
    product: Product;
}

export const ProductInformation = ({ product }: Props) => {
    const classes = useStyles();

    const { addToCart } = useContext(CartContext);

    return (
        <div className={classes.flex + ' ' + classes.columnDirection + ' ' + classes.flexGrowOne + ' ' + classes.textSize + ' ' + classes.textMargin}>
            <h1>{product?.name}</h1>
            <div className={classes.flex + ' ' + classes.spaceBetween}>
                <h2>{product.price} kr</h2>
                <Button color="inherit" onClick={() => {
                    addToCart(product)
                }}>
                    <AddShoppingCartIcon />
                </Button>
            </div>
            <p>{product.info}</p>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        flex: {
            display: 'flex',
        }, columnDirection: {
            flexDirection: 'column'
        }, flexGrowOne: {
            flexGrow: 0.5
        }, textMargin: {
            marginLeft: '1rem',
            marginRight: '1rem'
        }, textSize: {
            maxWidth: '40rem',
            minWidth: '280px'
        }, spaceBetween: {
            justifyContent: 'space-between'
        }
    }));