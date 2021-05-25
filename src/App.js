import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route path="panaderia">
        </Route>

        <Route path="/menu">
          <Menu />
        </Route>

        <Route path="/">
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
