import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import List from "./components/List";
import AddItem from "./components/AddItem";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "Abel",
    alignItems: "center",
    textAlign: "center",
  },
});

function App() {
  const classes = useStyles();
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/applications").then((resp) => {
      const data = resp.data;
      setApplications(data);
    });
  }, []);

  const addItem = (newItem) => {
    axios.post("http://localhost:3001/applications", newItem).then((resp) => {
      setApplications([...applications, resp.data]);
    });
  };

  const removeItem = (id) => {
    const toDelete = applications.find((app) => app.id === id);
    const isOk = window.confirm(`Delete ${toDelete.company}?`);
    if (isOk) {
      axios.delete(`http://localhost:3001/applications/${id}`).then((resp) => {
        setApplications(applications.filter((app) => app.id !== id));
      });
    }
  };

  const filtedItems =
    search.length === 0
      ? applications
      : applications.filter((app) =>
          app.company.toLowerCase().includes(search.toLocaleLowerCase())
        );

  return (
    <Container className={classes.root}>
      <Navbar />
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <List applications={filtedItems} remove={removeItem} />
      <AddItem addItem={addItem} />
    </Container>
  );
}

export default App;
