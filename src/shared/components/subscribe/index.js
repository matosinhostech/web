import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"

import "./styles.scss"

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({ EMAIL: email.value });

  return (
    <>
      <input
        ref={node => (email = node)}
        type="email"
        className="notifyMeInput"
        placeholder="Enter email address"
      />
      <button className="notifyMeButton" onClick={submit}>
        {!status && 'subscribe to newsletter'}
        {status === "sending" && 'Subscribing...'}
        {status === "error" && 'Error'}
        {status === "success" && 'Subscribed'}
      </button>
    </>
  );
};

class Subscribe extends Component {
  render() {
    const url = "https://tech.us1.list-manage.com/subscribe/post?u=7422bf10b779cb6ba13c8ea29&amp;id=e70c01b345";
    return (
      <div className="subscribeFormWrapper">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Subscribe;
