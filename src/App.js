import './App.css';
import {makeStyles} from '@material-ui/styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'; 
import List from './components/List'; 
// import AddItem from './components/AddItem';
import { Container } from '@material-ui/core';

const applications = [
  {
      company: 'Some Company',
      position: 'FrontEnd', 
      link: 'https://i.ibb.co/54CHvmW/workout-app.png',
      date: 'Nov 7'
  },
  {
      company: 'Yes Company',
      position: 'Customer Support', 
      link: 'https://i.ibb.co/54CHvmW/workout-app.png',
      date: 'Nov 7'
  },
  {
      company: 'Company',
      position: 'Backend', 
      link: 'https://i.ibb.co/54CHvmW/workout-app.png',
      date: 'Nov 10'
  },
]

const useStyles = makeStyles({
  root: {
    fontFamily: 'Abel',
    alignItems: 'center',
    textAlign: 'center', 
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
        <Navbar /> 
        <List applications={applications}/> 
        {/* <AddItem />  */}
    </Container> 
  );
}

export default App;
