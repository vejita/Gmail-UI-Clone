import React from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/MenuRounded";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownRounded from "@material-ui/icons/ArrowDropDownRounded";
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__center">
        <SearchIcon className="grey" />
        <input type="text" placeholder="Search mail" name="" id="" />
        <ArrowDropDownRounded className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
