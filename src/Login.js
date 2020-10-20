import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in..
    auth
      .signInWithPopup(provider)
      .then((result) => {
       dispatch({
         type: actionTypes.SET_USER,
         user: result.user,
       })

      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="Login_logo">
        <img
          src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_43glaq3c/def_height/776/def_width/1482/version/100111/type/2/q/100"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
