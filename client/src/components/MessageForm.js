import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../utils/mutations";
import { ALL_MESSAGES } from "../utils/queries";

const MessageForm = () => {
  const [messageText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    update(cache, { data: { addMessage } }) {
        //wrapped in try catch in case no messages exist
      try {
        const { messages } = cache.readQuery({ query: ALL_MESSAGES });
        cache.writeQuery({
          query: ALL_MESSAGES,
          data: { messages: [addMessage, ...messages] },
        });
      } catch (e) {
        console.warn("First user message!");
      }
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add message to database
      await addMessage({
        variables: { messageText },
      });

      // clear form
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`${characterCount === 280 || error ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
        {error && <span>Something went wrong...</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Write your message here..."
          value={messageText}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MessageForm;
