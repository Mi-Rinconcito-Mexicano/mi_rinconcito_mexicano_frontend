import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Panaderia from './Components/Panaderia/Panaderia'
import Home from './Components/Home/Home'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route path="/panaderia">
          <Panaderia />
        </Route>

        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
