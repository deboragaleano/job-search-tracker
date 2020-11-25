<<<<<<< HEAD
import "./App.css";
import appService from "./services/applications";
import { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import List from "./components/List";
import PageHeader from "./components/PageHeader";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fdfdff"
    },
  }
=======
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import Search from "./components/Search";
import List from "./components/List";
import AddItem from "./components/AddItem";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "Abel",
    alignItems: "center",
    textAlign: "center",
  },
>>>>>>> main
});


function App() {
<<<<<<< HEAD
=======
  const classes = useStyles();
>>>>>>> main
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
<<<<<<< HEAD
    appService.getItems().then((resp) => {
      setApplications(resp);
=======
    axios.get("http://localhost:3001/applications").then((resp) => {
      const data = resp.data;
      setApplications(data);
>>>>>>> main
    });
  }, []);

  const addItem = (newItem) => {
<<<<<<< HEAD
    appService.create(newItem).then((returnedItem) => {
      setApplications([...applications, returnedItem]);
=======
    axios.post("http://localhost:3001/applications", newItem).then((resp) => {
      setApplications([...applications, resp.data]);
>>>>>>> main
    });
  };

  const removeItem = (id) => {
    const toDelete = applications.find((app) => app.id === id);
    const isOk = window.confirm(`Delete ${toDelete.company}?`);
    if (isOk) {
<<<<<<< HEAD
      appService.remove(id).then((resp) => {
=======
      axios.delete(`http://localhost:3001/applications/${id}`).then((resp) => {
>>>>>>> main
        setApplications(applications.filter((app) => app.id !== id));
      });
    }
  };

  const filteredItems =
    search.length === 0
      ? applications
      : applications.filter((app) =>
<<<<<<< HEAD
          app.company.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <PageHeader /> 
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        <List applications={filteredItems} remove={removeItem} addItem={addItem}/>
    </ThemeProvider>
=======
          app.company.toLowerCase().includes(search.toLocaleLowerCase())
        );

  return (
    <Container className={classes.root}>
      <h1>JOB SEARCH TRACKER</h1>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <List applications={filteredItems} remove={removeItem} />
      <AddItem addItem={addItem} />
    </Container>
>>>>>>> main
  );
}

export default App;
