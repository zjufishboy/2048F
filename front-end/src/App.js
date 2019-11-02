import React from 'react';
import './css/common.css';
import './App.css';
//import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Page/Home/Home';
function App() {
  return (
    <div className="ccFlexColumn">
        <Home/> 
    </div>
  );
}

export default App;
