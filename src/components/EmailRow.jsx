import React from "react";
import "./css/EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { selectMAil } from "../features/counter/mailSlice";

function EmailRow(props) {
  const history = useHistory();
  const { id, title, subject, description, time } = props;
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMAil({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">{`- ${description}`}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
