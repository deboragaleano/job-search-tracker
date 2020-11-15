import {useEffect, useState} from 'react'; 
import {makeStyles} from '@material-ui/styles';
import axios from 'axios'; 
import Navbar from './components/Navbar'; 
import List from './components/List'; 
import AddItem from './components/AddItem';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Abel',
    alignItems: 'center',
    textAlign: 'center', 
  },
});

function App() {
  const classes = useStyles();
  const [applications, setApplications] = useState([]); 

  useEffect(() => {
    axios
      .get('http://localhost:3001/applications')
      .then(resp => {
        const data = resp.data
        setApplications(data)
      })
  }, [])

  const addItem = (newItem) => {
    axios
      .post('http://localhost:3001/applications', newItem)
      .then(resp => {
        setApplications([...applications, resp.data]) 
      })
  }

  const removeItem = (id) => {
    const toDelete = applications.find(app => app.id === id)
    const isOk = window.confirm(`Delete ${toDelete.company}?`)
    if(isOk) {
      axios
        .delete(`http://localhost:3001/applications/${id}`)
        .then(resp => {
          setApplications(applications.filter(app => app.id !== id))
        })
    }
  }

  const updateItem = (id, updatedItem) => {
    const isSame = applications.find(app => app.id === id)
    if(isSame) {
      axios 
        .put(`http://localhost:3001/applications/${id}`, updatedItem)
        .then(returnedItem => {
          const updatedApps = applications.map(app => app.id === id ? returnedItem.data : app)
          setApplications(updatedApps)
        })
    }
  }

  return (
    <Container className={classes.root}>
        {/* <Navbar />  */}
        <h1>JOB SEARCH TRACKER</h1>
        <AddItem addItem={addItem}/>  
        <List applications={applications} remove={removeItem} update={updateItem}/> 
    </Container> 
  );
}

export default App;
