import { Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { createStyles, makeStyles } from '@material-ui/styles'
import { Theme } from 'pretty-format'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { productArray } from '../data'

interface Props extends RouteComponentProps<{ id: string }> {

}

export const ProductPage = (props: Props) => {

    const product = productArray.find((p) => p.id == props.match.params.id)

    const classes = useStyles();

    if (!product) {
        return <h1 className={classes.contentMargin}>404 not found yo</h1>
    } else {
        return (
            <div className={classes.contentMargin + ' ' + classes.justifyCenter + ' ' + classes.flex + ' ' + classes.flexWrap}>
                <img src={product.imageUrl} alt='' className={classes.imgSize + ' ' + classes.flexGrowOne} />
                <div className={classes.flex + ' ' + classes.columnDirection + ' ' + classes.flexGrowOne + ' ' + classes.textSize + ' ' + classes.textMargin}>
                    <h1>{product?.name}</h1>
                    <div className={classes.flex + ' ' + classes.spaceBetween}>
                        <h2>{product.price} kr</h2>
                        <Button color="inherit">
                            <AddShoppingCartIcon />
                        </Button>
                    </div>
                    <p>{product.info}</p>
                </div>
            </div>
        )
    }
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        contentMargin: {
            marginTop: '4rem'
        }, flex: {
            display: 'flex',
        }, justifyCenter: {
            justifyContent: 'center'
        }, imgSize: {
            maxWidth: '30rem',
            minWidth: '320px'
        }, columnDirection: {
            flexDirection: 'column'
        }, flexWrap: {
            flexWrap: 'wrap'
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
