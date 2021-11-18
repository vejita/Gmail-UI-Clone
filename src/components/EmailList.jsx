import React from "react";
import "./css/EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__section">
        <Section Icon={Inbox} title="primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          id="897\864"
          title="Twitch"
          subject="wfeduksafcwuyerwd"
          description="testing"
          time="10pm"
        />
        <EmailRow
          id="897\864"
          title="Twitch"
          subject="wfeduksafcwuyerwd"
          description="testing"
          time="10pm"
        />
        <EmailRow
          id="897\864"
          title="Twitch"
          subject="wfeduksafcwuyerwd"
          description=" testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
