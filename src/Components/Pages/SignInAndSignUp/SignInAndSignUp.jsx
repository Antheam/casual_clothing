import React from "react";

import "./SignInAndSignUp.scss";

import SignIn from "../../SignIn/SignIn.jsx";
import SignUp from "../../SignUp/SignUp.jsx";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
