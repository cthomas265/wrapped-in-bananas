const { Schema } = require('mongoose')

//AA - how to incorporate signatures?
//AA - need this model to reference the user model who posts the message

const messageSchema = new Schema(
    {
      messageBody: {
        type: String,
        required: "A message is required.",
      },
      username: {
        //should be able to reference user model
        //username of person who's commenting
      }
    },
    {
      timestamps: true,
    }
);


module.exports = messageSchema;