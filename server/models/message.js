const { Schema, model, Types } = require('mongoose')
const commentSchema = require ('./comment')
const dateFormat = require('../utils/dateFormat')

//AA - how to incorporate signatures?
//AA - need this model to reference the user model who posts the message

const messageSchema = new Schema(
    {
      messageBody: {
        type: String,
        required: "A message is required.",
        minlength: 1,
        maxlentgh: 280
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
      // messageId: {
      //   type: Schema.Types.ObjectId,
      //       default: () => new Types.ObjectId()
      // },
      //AA - will eventually want this to reference an existing user id
      username: {
        type: String,
        required: true
      },
      comments: [commentSchema]
    },
    {
      toJSON: {
        getters: true
      },
    }
);

//tie messageSchema and cast into Message model
const Message = model('Message', messageSchema)
module.exports = Message