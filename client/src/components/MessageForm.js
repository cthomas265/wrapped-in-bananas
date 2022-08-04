import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../utils/mutations";
import { ALL_MESSAGES } from "../utils/queries";
import { Textarea, Button } from '@mantine/core';

const MessageForm = () => {
  const [messageBody, setMessageBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    refetchQueries: [{ query: ALL_MESSAGES }, "messages"],
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setMessageBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add message to database
      await addMessage({
        variables: { messageBody },
      });

      // clear form
      setMessageBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleFormSubmit}>
        <Textarea
        
          placeholder="Write your message here..."
          value={messageBody}
          onChange={handleChange}
          autosize
          minRows={4}
        ></Textarea>
        <p className={`${characterCount === 280 || error ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
        {error && <i> - Please write a message!</i>}
      </p>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default MessageForm;
