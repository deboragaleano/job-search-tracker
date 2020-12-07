import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Typography, DialogContent, DialogTitle } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
  dialogContainer: {
    padding: theme.spacing(2),
  },
}));

export default function Modal(props) {
  const {open, handleClose, itemForEdit } = props; 
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogContainer }}
        aria-labelledby="add new"
      >
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: "1" }}>
              {itemForEdit ? 'Update application' : 'Add a new application 🤞🏽'}
            </Typography>
            <IconButton color="secondary" onClick={handleClose}>
              <CloseIcon>Close</CloseIcon>
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {props.children}
        </DialogContent>
      </Dialog>
    </>
  );
}
