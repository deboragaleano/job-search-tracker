import './App.css';
import {makeStyles} from '@material-ui/styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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

  return (
    <Container className={classes.root}>
        <BrowserRouter>
          <Navbar /> 

          <Switch>
            <Route exact path='/' component={List}/>
            <Route exact path='/add' component={AddItem}/>
          </Switch>

        </BrowserRouter>
     
    </Container> 
  );
}

export default App;
