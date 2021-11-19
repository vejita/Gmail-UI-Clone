import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/counter/mailSlice";
import "./css/SendMail.css";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const handleOnSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="SendMail__header">
        <h3>New Message</h3>
        <Close
          className="SendMail__close"
          onClick={() => {
            dispatch(closeSendMessage());
          }}
        />
      </div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="SendMail__errors">To is Required! </p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="SendMail__errors">Subject is Required! </p>
        )}
        <input
          name="message"
          placeholder="Message.."
          type="text"
          className="sendmail__message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="SendMail__errors">Message is Required! </p>
        )}

        <div className="SendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
