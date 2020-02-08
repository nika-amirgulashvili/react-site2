import React from 'react';
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home'
import Services from './components/Services/Services'

function App() {
  return (
    <div>
      <Router>
      <div className="navbar1">
      <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </div> 
    </Router>
     
    </div>
  );
}

export default App;
