import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AppForm from "./AppForm";
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

export default function Modal({ addItem }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddIcon /> Add New
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogContainer }}
        aria-labelledby="add new"
      >
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: "1" }}>
              Add a new application 🤞🏽
            </Typography>
            <IconButton color="secondary" onClick={handleClose}>
              <CloseIcon>Close</CloseIcon>
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <AppForm addItem={addItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
