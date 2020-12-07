import "./App.css";
import appService from "./services/applications";
import { useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import List from "./components/List";
import PageHeader from "./components/PageHeader";
import Navbar from "./components/Navbar";

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

  const removeItem = (id) => {
    const toDelete = applications.find((app) => app.id === id);
    const isOk = window.confirm(`Delete ${toDelete.company}?`);
    if (isOk) {
      appService.remove(id).then((resp) => {
        setApplications(applications.filter((app) => app.id !== id));
      });
    }
  };

  const addOrEdit = (id, newItem) => {
    const itemToUpdate = applications.find(app => app.id === id)

    if(!itemToUpdate) {
      appService.create(newItem).then((createdItem) => {
        setApplications([...applications, createdItem]);
      });
    } else {
      appService.update(itemToUpdate.id, newItem).then(updatedItem => {
        const updatedApps = applications.map(app => 
          app.id === itemToUpdate.id ? updatedItem : app)
        setApplications(updatedApps)
      })
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
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
          <List
            search={search}
            handleSearch={handleSearch}
            applications={filteredItems}
            remove={removeItem}
            addOrEdit={addOrEdit}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
