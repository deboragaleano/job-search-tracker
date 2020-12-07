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
  },
}));

const initialValues = {
  company: "",
  position: "",
  link: "",
  date: "",
  note: "",
};

export default function EditForm({ editItem, itemForEdit, handleClose }) {
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

  const handleSubmit = (e, id) => {
    e.preventDefault();
    editItem(id, newItem);
    handleClose();
  };

  useEffect(() => {
    if (itemForEdit !== null) {
      setValues({
        ...itemForEdit,
      });
    }
  }, [itemForEdit]);

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
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
