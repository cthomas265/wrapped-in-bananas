const { Schema, model, Types } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

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
      username: {
        type: String,
        required: true
      },
    },
    {
      toJSON: {
        getters: true
      },
    }
);

const Message = model('Message', messageSchema)
module.exports = Message