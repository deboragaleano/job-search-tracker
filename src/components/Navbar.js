import React from "react";
import { NavLink } from "react-router-dom";
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
      <NavButton
        component={NavLink}
        to="/"
        exact
        className={classes.margin}
        activeClassName={classes.active}
      >
        LIST
      </NavButton>
      <NavButton
        component={NavLink}
        to="/add"
        exact
        className={classes.margin}
        activeClassName={classes.active}
      >
        ADD NEW
      </NavButton>
    </Container>
  );
}

export default Navbar;
