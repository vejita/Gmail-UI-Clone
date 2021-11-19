import { Button } from "@material-ui/core";
import React from "react";
import "./css/Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Login;
