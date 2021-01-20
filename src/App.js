import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  return (
    <Router>
      <Sidebar>
      <Switch>
    <Home exact path="/" />
    <Projects path="/viewprojects" />
    </Switch>
    </Sidebar>

    
    </Router>
  );
}

export default App;
