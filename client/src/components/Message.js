import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_MESSAGE, DELETE_MESSAGE } from "../utils/mutations";

const Message = ({ messages, title }) => {
  const updateMessage = useMutation(UPDATE_MESSAGE);
  const deleteMessage = useMutation(DELETE_MESSAGE);

  // const handleUpdateMessage = async ()
  // const handleDeleteMessage = async ()


  if (!messages.length) {
    return <h3>No Messages Yet!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {messages &&
        messages.map((message) => (
          <div key={message._id}>
            <p>
              {message.username} message on {message.createdAt}
            </p>
            <div>
              <p>{message.messageBody}</p>
            </div>
            <div>
              {/* <button onClick={() => handleUpdateMessage(message._id)}>Edit</button> */}
              {/* <button onClick={() => handleDeleteMessage(message._id)}>Delete</button> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Message;
