import './App.css';
import Home from './Home';
import Navbar  from './Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <div className="App">
      <Home />
       <h1>Component App</h1>
     </div>
     </Router>
    </>
  );
}
export default App;
