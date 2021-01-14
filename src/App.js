import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Sidebar />
    <div>hiii</div>
    </Router>
  );
}

export default App;
