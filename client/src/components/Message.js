import React from "react";

const Message = ({ messages, title }) => {
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
          </div>
        ))}
    </div>
  );
};

export default Message;
