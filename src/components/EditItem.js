import React, { useState } from "react";
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
  date: {
    marginTop: '24px'
  }
}));

export default function EditItem({ update }) {
  const classes = useStyles();
  const [newCompany, setCompany] = useState("");
  const [newPosition, setPosition] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newDate, setNewDate] = useState("");

  const newItem = {
    company: newCompany,
    position: newPosition,
    link: newLink,
    date: newDate,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(newItem);
    setCompany('')
    setPosition('')
    setNewLink('')
    setNewDate('')
  };

  return (
    <div>
      <Container maxWidth="sm">
        {/* <h2>ADD NEW</h2> */}
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField
            id="standard-basic"
            value={newCompany}
            onChange={(e) => setCompany(e.target.value)}
            label="Company"
          />
          <TextField
            id="standard-basic"
            value={newPosition}
            onChange={(e) => setPosition(e.target.value)}
            label="Job Title"
          />
          <TextField
            id="standard-basic"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            label="Job Link"
          />
          <TextField
            id="date"
            type="date"
            className={classes.date}
            value={newDate}
            dafault="Date"
            onChange={(e) => setNewDate(e.target.value)}
          />
          <Button variant="outlined" color="secondary" type="submit">
            Update
          </Button>
        </form>
      </Container>
    </div>
  );
}
