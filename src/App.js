import './App.css';
import {makeStyles} from '@material-ui/styles';
import Navbar from './components/Navbar'; 
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
    </Container> 
  );
}

export default App;
