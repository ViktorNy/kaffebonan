import { AppBar, Toolbar, Button, createStyles, makeStyles, Theme, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import logo from '../images/headerlogo.png';
import { CartContext, ShoppingItem } from '../context/CartContext';
import { useContext } from 'react';

export const HeaderBar = () => {
    const classes = useStyles();
    const { shoppingCart } = useContext(CartContext);

    const numberOfItemsInCart = calcAmountInCart(shoppingCart);

    return (
        <div>
            <AppBar position='fixed' className={classes.headerColor}>
                <Toolbar>
                    <div className={`${classes.title}`}>
                        <Link to='/'><img src={logo} alt='' className={`${classes.logoStyle}`} /></Link>
                    </div>
                    <Button color='inherit'>
                        <Link to='/checkout'>
                            <Badge className={classes.cartStyling} badgeContent={numberOfItemsInCart} color='secondary'>
                                <ShoppingCartIcon className={classes.cartStyling} />
                            </Badge>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const calcAmountInCart = (shoppingCart: ShoppingItem[]) => {
    let amount = 0;
    shoppingCart.map((product) => amount += product.amount)
    return amount;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            display: 'flex'
        },
        headerColor: {
            background: '#8A624A'
        },
        logoStyle: {
            height: '2.5rem',
            alignItems: 'center'
        },
        cartStyling: {
            color: 'white'
        }
    }));