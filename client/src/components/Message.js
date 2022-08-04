import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { DELETE_MESSAGE, UPDATE_MESSAGE } from "../utils/mutations";
import { ALL_MESSAGES } from "../utils/queries";
import { Button, Card } from "@mantine/core";

const Message = ({ messages }) => {
  const user = Auth.getLoggedInUser();
  console.log(user);

  const [messageToEdit, setMessageToEdit] = useState(null);
  console.log(messageToEdit);

  const [updateMessage] = useMutation(UPDATE_MESSAGE, {
    refetchQueries: [{ query: ALL_MESSAGES }, "messages"],
  });

  const handleSaveEdit = async () => {
    await updateMessage({
      variables: {
        messageBody: messageToEdit.messageBody,
        _id: messageToEdit._id,
      },
    });
    setMessageToEdit(null);
  };

  const [deleteMessage] = useMutation(DELETE_MESSAGE, {
    refetchQueries: [{ query: ALL_MESSAGES }, "messages"],
  });

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const change = setTimeout(() => {
      setAlert(false);
    }, 800);
    return () => clearTimeout(change);
  }, [alert]);

  const handleDeleteMessage = async (id) => {
    try {
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
      {alert ? <i className="alert">Your message has been deleted</i> : ""}
      {messages &&
        messages.map((message) => (
          <Card
            key={message._id}
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className="messageCard"
          >
            <p>
              Posted by <b>{message.username}</b> on {message.createdAt}
            </p>
            <Card shadow="sm" className="messageText">
              {messageToEdit?._id === message._id ? (
                <>
                  <input
                    type="text"
                    value={messageToEdit.messageBody}
                    onChange={(e) =>
                      setMessageToEdit({
                        ...messageToEdit,
                        messageBody: e.target.value,
                      })
                    }
                  />
                  <Button onClick={handleSaveEdit}>Save</Button>
                  <Button 
                    onClick={() => setMessageToEdit(null)}
                    color="gray"
                    >
                      Cancel
                      </Button>
                </>
              ) : (
                <p>{message.messageBody}</p>
              )}
            </Card>
            <div>
              {user.username === message.username && (
                <>
                  <Button
                    type="submit"
                    color="gray"
                    onClick={() => {
                      handleDeleteMessage(message._id);
                      setAlert(true);
                    }}
                  >
                    Delete
                  </Button>
                  <Button onClick={() => setMessageToEdit(message)}>
                    Edit
                  </Button>
                </>
              )}
            </div>
          </Card>
        ))}
    </div>
  );
};

export default Message;
