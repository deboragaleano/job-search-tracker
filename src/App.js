import "./App.css";
import appService from "./services/applications";
import { useEffect, useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "./components/List";
import Modal from "./components/Modal";
import PageHeader from "./components/PageHeader";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d81b60",
    },
    secondary: {
      main: "#607d8b",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "red",
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  modal: {
    margin: theme.spacing(3)
  }
}));

function App() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  useEffect(() => {
    appService.getItems().then((resp) => {
      setApplications(resp);
    });
  }, []);

  const addItem = (newItem) => {
    appService.create(newItem).then((returnedItem) => {
      setApplications([...applications, returnedItem]);
    });
  };

  const removeItem = (id) => {
    const toDelete = applications.find((app) => app.id === id);
    const isOk = window.confirm(`Delete ${toDelete.company}?`);
    if (isOk) {
      appService.remove(id).then((resp) => {
        setApplications(applications.filter((app) => app.id !== id));
      });
    }
  };

  const filteredItems =
    search.length === 0
      ? applications
      : applications.filter((app) =>
          app.company.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="App">
        <PageHeader />
        <Paper className={classes.pageContent}>
          <div className={classes.toolbar}>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Modal className={classes.modal} addItem={addItem}/> 
          </div>
          <List
            applications={filteredItems}
            remove={removeItem}
            addItem={addItem}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
