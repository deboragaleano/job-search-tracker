import "./App.css";
import appService from "./services/applications";
import { useEffect, useState } from "react";
import List from "./components/List";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";

function App() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

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
    <>
      <Navbar />
      <Container>
        <h1>JOB SEARCH TRACKER</h1>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        <List applications={filteredItems} remove={removeItem} />
        <AddItem addItem={addItem} />
      </Container>
    </>
  );
}

export default App;
