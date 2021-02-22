import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../../src/Firebase/Firebase.utils.js";
import CartIcon from "../CartIcon/CartIcon.jsx";
import CartDropdown from "../Cart-dropdown/Cart-dropdown.jsx";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-content">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link className="option">CONTACT</Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
