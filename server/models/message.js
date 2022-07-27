const { Schema, model, Types } = require('mongoose')

//AA - how to incorporate signatures?
//AA - need this model to reference the user model who posts the message

const messageSchema = new Schema(
    {
      messageBody: {
        type: String,
        required: "A message is required.",
      },
      messageId: {
        type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
      },
      //AA - will eventually want this to reference an existing user id
      username: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true,
    }
);

//tie messageSchema and cast into Message model
const Message = model('Message', messageSchema)
module.exports = Message