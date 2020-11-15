import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search"; 
import List from "./List";
import AddItem from "./AddItem";

function Home() {
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

  const filteredItems =
    search.length === 0
      ? applications
      : applications.filter((app) =>
          app.company.toLowerCase().includes(search.toLocaleLowerCase())
        );

  return (
    <>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <List applications={filteredItems} remove={removeItem} />
      <AddItem addItem={addItem} />
    </>
  );
}

export default Home;
