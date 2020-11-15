import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddItem({ addItem }) {
  const classes = useStyles();
  
  // TODO: add handleSubmit with reset()

  return (
    <div>
      <Container maxWidth="sm">
        <h2>ADD NEW</h2>
        <form className={classes.root}>
          <TextField label="Company" />
          <TextField label="Job Title" />
          <TextField label="Job Link" />
          <TextField label="Date Applied" />
          <Button type="submit" variant="outlined" color="secondary">
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
}
