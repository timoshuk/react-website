import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
