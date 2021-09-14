import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@material-ui/core";
import { FC, useState } from "react";

interface Props{
    open: boolean,
    closedDialog: () => void
}



export const ProductDialog: FC<Props> = ({open, closedDialog}) => {

  

  return (
    <div>
      <Dialog open={open} onClose={closedDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closedDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closedDialog} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

