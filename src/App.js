import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Progress from './Progress';
import History from './History';
import './App.css';
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/" className='logo-link'>
                <img src={logo} alt="FitLog Logo" className="logo" /> 
              </Link>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/history">History</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;