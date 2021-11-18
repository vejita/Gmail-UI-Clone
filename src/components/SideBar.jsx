import React from "react";
import "./css/SideBar.css";
import SideBarOptions from "./SideBarOptions";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InBoxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Duo, Person, Phone } from "@material-ui/icons";

function SideBar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SideBarOptions Icon={InBoxIcon} title="Inbox" number={54} selected />
      <SideBarOptions Icon={StarIcon} title="Starred" number={54} />
      <SideBarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SideBarOptions Icon={LabelImportantIcon} title="Important" number={54} />
      <SideBarOptions Icon={NearMeIcon} title="Sent" number={54} />
      <SideBarOptions Icon={NoteIcon} title="Drafts" number={54} />
      <SideBarOptions Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
