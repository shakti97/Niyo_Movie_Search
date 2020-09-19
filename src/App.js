import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Banks from "./Components/Banks";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/banks/:id" exact component={Banks} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
