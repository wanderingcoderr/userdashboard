import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import MainRoute from './route'
function App() {

  return (
    <Router>
    <div className="App container main">
   <MainRoute/>
    </div>
    </Router>
  );
}

export default App;
