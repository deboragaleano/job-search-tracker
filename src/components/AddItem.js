import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function AddItem() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <h2>ADD NEW</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Company" />
          <TextField id="standard-basic" label="Job Title" />
          <TextField id="standard-basic" label="Job Link" />
          <TextField id="standard-basic" label="Date Applied" />
          <Button variant="outlined" color="secondary">Add</Button>
        </form>
      </Container>
    </div>
  );
}
