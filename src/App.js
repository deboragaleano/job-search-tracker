import './App.css';
import {makeStyles} from '@material-ui/styles';
import Navbar from './components/Navbar'; 
// import List from './components/List'; 
// import AddItem from './components/AddItem';
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
        <Navbar /> 
        {/* <List />  */}
        {/* <AddItem />  */}
    </Container> 
  );
}

export default App;
