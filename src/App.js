import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Components/Pages/Homepage/Homepage.jsx";
import ShopPage from "./Components/Pages/Shop/Shop.jsx";
import Header from "./Components/Header/Header.jsx";
import SignInAndSignUp from "./Components/Pages/SignInAndSignUp/SignInAndSignUp.jsx";
import { auth } from "./Components/Firebase/Firebase.utils.js";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
