import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_MESSAGE } from "../utils/mutations";
import { Button } from "@mantine/core"

const Message = ({ messages, title }) => {
  // const updateMessage = useMutation(UPDATE_MESSAGE);
  const [deleteMessage, { error }] = useMutation(DELETE_MESSAGE);

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const change = setTimeout(() => {
      setAlert(false);
    }, 800);
    return () => clearTimeout(change);
  }, [alert]);

  // const handleUpdateMessage = async ()

  const handleDeleteMessage = async (id) => {
    try {
      // console.log(id);
      await deleteMessage({
        variables: { _id: id },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!messages.length) {
    return <h3>No Messages Yet!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {alert ? <h4>Your message has been deleted</h4> : ""}
      {messages &&
        messages.map((message) => (
          <div key={message._id}>
            <p>
              Posted by <b>{message.username}</b> on {message.createdAt}
            </p>
            <div>
              <p>{message.messageBody}</p>
            </div>
            <div>
              {/* <button onClick={() => handleUpdateMessage(message._id)}>Edit</button> */}
              <Button
                onClick={() => {
                  handleDeleteMessage(message._id);
                  setAlert(true);
                  window.location.reload();
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Message;
