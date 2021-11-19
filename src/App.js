import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/counter/mailSlice";
import Login from "./components/Login";

function App() {
  const sendMessagesIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Login />
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <div className="App__body">
    //       <SideBar />
    //       <Switch>
    //         <Route path="/mail" exact>
    //           <Mail />
    //         </Route>
    //         <Route path="/" exact>
    //           <EmailList />
    //         </Route>
    //       </Switch>
    //     </div>
    //     {sendMessagesIsOpen && <SendMail />}
    //   </div>
    // </Router>
  );
}

export default App;
