import "./App.css";
import axios from "axios";
// import appService from './services/applications';
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import List from "./components/List";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import { Container } from "@material-ui/core";
const URL = "http://localhost:3001/applications";

const useStyles = makeStyles({
  root: {
    fontFamily: "Abel",
    alignItems: "center",
    textAlign: "center",
  },
});

function App() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  useEffect(() => {
    axios.get(URL).then((resp) => {
      setApplications(resp.data);
      console.log('useeffect');
    });
  }, []); 

  const addItem = (newItem) => {
    axios.post(URL, newItem).then((resp) => {
      setApplications([...applications, resp.data]);
    });
  };

  const removeItem = (id) => {
    const toDelete = applications.find((app) => app.id === id);
    const isOk = window.confirm(`Delete ${toDelete.company}?`);
    if (isOk) {
      axios.delete(`${URL}/${id}`).then((resp) => {
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
    <Container className={classes.root}>
      <h1>JOB SEARCH TRACKER</h1>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <List applications={filteredItems} remove={removeItem} />
      <AddItem addItem={addItem} />
    </Container>
  );
}

export default App;

/* TODO:
  1) Fetch data
  2) Add Item
  3) Remove Item
  4) Search Items (add state and pass props)
  */
