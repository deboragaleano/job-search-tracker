import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4)
  },
}));

export default function Search({value, onChange}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <TextField value={value} onChange={onChange} label="Search Company"/>
    </div>
  );
}
