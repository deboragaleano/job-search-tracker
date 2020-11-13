import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";

const NavButton = withStyles((theme) => ({
  root: {
    color: "#D2691E",
    fontWeight: "bolder",
    fontFamily: "Abel",
    fontSize: "15px",
    border: "1px solid #D2691E",
    letterSpacing: "1px",
    transition:'all 0.5s ease',
    "&:hover": {
      color: "#D2691E",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0 50px 0",
  },
  margin: {
    margin: theme.spacing(1),
  },
  active: {
    fontWeight: "bolder",
    color: "white",
    backgroundColor: "#D2691E",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1>JOB SEARCH TRACKER</h1>
      <NavButton className={classes.margin}>LIST</NavButton>
      <NavButton className={classes.margin}>ADD NEW</NavButton>
    </Container>
  );
}

export default Navbar;
