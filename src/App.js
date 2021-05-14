import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route path="/">
        </Route>

        <Route path="/menu">
        </Route>

        <Route path="/panaderia">
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
