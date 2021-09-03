import { Card, CardContent, CardMedia, Typography, makeStyles, createStyles, Theme, Button } from '@material-ui/core'
import React, { FC } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Product } from '../pages/StartPage';

interface Props {
    product: Product;
}

export const ProductCard: FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainerHeight}>
            <CardContent>
                <CardMedia className={classes.media} image={props.product.imageUrl} />
                <Typography >{props.product.name}</Typography>
                {/* Låt typography vara kvar tills vidare */}
                <div className={`${classes.flex} ${classes.spaceBetween}`}>
                    <p>Pris {props.product.price} kr</p>
                    <Button >
                        <AddIcon />
                    </Button>
                </div>
            </CardContent>
        </Card>
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
        }
    }));