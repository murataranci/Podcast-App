import './App.css';
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Browser from './components/Browser/Browser';
import Login from './components/Login/Login';
import Podcast from './components/Podcast/Podcast';




function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/browser' element={<Browser/>} />
        <Route path='/podcast' element={<Podcast/>} />
      </Routes>
    </Router>
  );
}

export default App;
