import React from "react";
import { Paper, Card, makeStyles, Typography } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "fdfdff",
  },
  pageHeader: {
      padding: theme.spacing(4),
      display: 'flex',
      marginBottom: theme.spacing(2)
  },
  pageIcon: {
      display: 'inline-block',
      marginLeft: theme.spacing(2),
      padding: theme.spacing(2),
      color: '#3c44b1'
  },
  pageTitle: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      '& .MuiTypography-subtitle2': {
          opacity: '0.6'
      }
  }
}));

export default function PageHeader() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0} square>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
          <EventNoteIcon fontSize="large"/>
        </Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            Job Search Tracker
          </Typography>
          <Typography variant="subtitle2" component="div">
            Keep your applications in one place
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
