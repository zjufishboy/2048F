import React from 'react';
import './css/common.css';
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Page/Home/Home';
function App() {
  return (
    <div className="ccFlexColumn">
        <Router >
          <Route exact path="/" component={(routeProps)=><Home {...routeProps}/>}/>
          {/* <Route exact path="/test" component={(routeProps)=><Sample {...routeProps} content={"测试"}/>} />
          <Route exact path="/test/:id" component={(routeProps)=><Sample {...routeProps} content={"测试"}/>} /> */}
        </Router>
    </div>
  );
}

export default App;
