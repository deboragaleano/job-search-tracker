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
}));

const initialValues = {
  company: "",
  position: "",
  link: "",
  date: "",
  note: "",
};

export default function AppForm({ addItem }) {
  const [values, setValues] = useState(initialValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const newItem = {
    company: values.company,
    position: values.position,
    link: values.link,
    date: values.date,
    note: values.note,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    // setValues(initialValues);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <h2>ADD NEW</h2>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField
            value={values.company}
            name="company"
            onChange={handleInputChange}
            label="Company"
          />
          <TextField
            value={values.position}
            name="position"
            onChange={handleInputChange}
            label="Job Title"
          />
          <TextField
            value={values.link}
            name="link"
            onChange={handleInputChange}
            label="Job Link"
          />
          <TextField
            id="date"
            type="date"
            name="date"
            className={classes.date}
            value={values.date}
            dafault="Date"
            onChange={handleInputChange}
          />
          <TextField
            value={values.note}
            name="note"
            onChange={handleInputChange}
            label="Note"
          />
          <Button type="submit" variant="outlined" color="secondary">
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
}
