import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_MESSAGES } from "../utils/queries";
import Auth from "../utils/auth";
import Message from "../components/Message";
import MessageForm from "../components/MessageForm";

const MessageBoard = () => {
  const { loading, data } = useQuery(ALL_MESSAGES);

  const messages = data?.messages || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main className="messagePage">
      <h1>Message Board</h1>
      <h3>Leave a message for your classmates!</h3>
      <div>
        {loggedIn && (
          <div>
            <MessageForm />
          </div>
        )}
        <div>
          {loading ? <div>Loading...</div> : <Message messages={messages} />}
        </div>
      </div>
    </main>
  );
};

export default MessageBoard;
