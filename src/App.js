import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Components/Pages/Homepage/Homepage.jsx";
import ShopPage from "./Components/Pages/Shop/Shop.jsx";
import Header from "./Components/Header/Header.jsx";
import SignInAndSignUp from "./Components/Pages/SignInAndSignUp/SignInAndSignUp.jsx";

import {
  auth,
  createUserProfileDocument
} from "../src/Firebase/Firebase.utils.js";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          this.setState({ currentUser: { id: snapShot.id, ...snapShot.data } });
        });
        console.log(this.state);
      }
      this.setState({ currentUser: userAuth });
      console.log(userAuth);
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
