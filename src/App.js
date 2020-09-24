import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Components/Pages/Homepage/Homepage.jsx";
import ShopPage from "./Components/Pages/Shop/Shop.jsx";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
