import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./Components/Pages/Homepage/Homepage.jsx";
import ShopPage from "./Components/Pages/Shop/Shop.jsx";
import Header from "./Components/Header/Header.jsx";
import SignInAndSignUp from "./Components/Pages/SignInAndSignUp/SignInAndSignUp.jsx";

import {
  auth,
  createUserProfileDocument
} from "../src/Firebase/Firebase.utils.js";
import { setCurrentUser } from "./redux/user/user.actions.js";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

        console.log(this.state);
      }
      setCurrentUser(userAuth);
      console.log(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
