import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      display: "flex",
      margin: theme.spacing(4.5),
      width: "80%",
    },
  },
  btn: {
    marginLeft: "35px",
  }
}));

const initialValues = {
  id: null, 
  company: "",
  position: "",
  link: "",
  date: "",
  note: "",
};

export default function AppForm({ addOrEdit, itemToUpdate, handleClose }) {
  const [values, setValues] = useState(initialValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values.id, values);
    setValues(initialValues)
    handleClose();
  };

  // Updates and watches for itemToUpdate prop every time it changes 
  useEffect(() => {
    if (itemToUpdate !== null) {
      setValues({
        ...itemToUpdate,
      });
    } 
  }, [itemToUpdate]);

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              required
              variant="outlined"
              value={values.company}
              name="company"
              onChange={handleInputChange}
              label="Company"
            />
            <TextField
              required
              variant="outlined"
              value={values.position}
              name="position"
              onChange={handleInputChange}
              label="Job Title"
            />
            <TextField
              required
              variant="outlined"
              value={values.link}
              name="link"
              onChange={handleInputChange}
              label="Job Link"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              id="date"
              type="date"
              name="date"
              className={classes.date}
              value={values.date}
              dafault="Date"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              value={values.note}
              name="note"
              onChange={handleInputChange}
              label="Note"
            />
            <Button
              className={classes.btn}
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
