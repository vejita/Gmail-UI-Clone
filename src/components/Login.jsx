import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./css/Login.css";
function Login() {
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/inbox")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
