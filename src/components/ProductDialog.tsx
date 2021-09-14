import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, AppBar, Divider, IconButton, List, ListItem, ListItemText, Toolbar, Typography, createStyles, makeStyles, Theme, Slide, Grid, Snackbar, TextField } from "@material-ui/core";
import { FC, FormEvent, useContext, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";
import logo from '../images/headerlogo.png';
import { Product } from "../data";
import InventoryContext from "../context/InventoryContext";

interface Props {
    product?: Product,
    open: boolean;
    closeDialog: () => void;
}

export const ProductDialog: FC<Props> = ({ open, closeDialog, product }) => {

    const [newProduct, setNewProduct] = useState<Product>({} as Product);

    const classes = useStyles();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <div>
            <Dialog fullScreen open={open} onClose={closeDialog} TransitionComponent={Transition}>
                <AppBar className={`${classes.appBar} ${classes.headerColor}`}>
                    <Toolbar>
                        <Typography className={classes.title}>
                            <img src={logo} alt='' className={`${classes.logoStyle}`} />
                        </Typography>
                        <Button autoFocus color="inherit" onClick={closeDialog}>
                            <CloseIcon />
                        </Button>
                    </Toolbar>
                </AppBar>
                <form onSubmit={handleSubmit}>
                    <div className={classes.formMargin}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="Name"
                                    fullWidth
                                    label="namn"
                                    variant="outlined"
                                    required
                                    type="email"
                                value={newProduct.name}
                                onChange={e => {
                                    setNewProduct({ ...newProduct, name: e.target.value })
                                }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="Price"
                                    fullWidth
                                    label="pris"
                                    variant="outlined"
                                    required
                                    type="number"
                                    value={newProduct.price}
                                    onChange={e => {
                                        setNewProduct({ ...newProduct, price: Number(e.target.value) })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="Info"
                                    fullWidth
                                    label="info"
                                    variant="outlined"
                                    required
                                    value={newProduct.info}
                                    onChange={e => {
                                        setNewProduct({ ...newProduct, info: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="ImgUrl"
                                    fullWidth
                                    label="Bild URL"
                                    variant="outlined"
                                    required
                                    value={newProduct.imageUrl}
                                    onChange={e => {
                                        setNewProduct({ ...newProduct, imageUrl: e.target.value })
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.center}>
                                <Button variant="contained" color="primary" type="submit">
                                    Spara
                                </Button>
                            </Grid>
                        </Grid>
                    </div >
                </form >
            </Dialog>
        </div>
    );
}

// Copied
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        headerColor: {
            background: '#8A624A'
        },
        center: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        formMargin: {
            margin: "10%",
            maxWidth: "1000px"
        },
        logoStyle: {
            display: 'flex',
            height: '3rem',
        }
    }),
);