const { Schema, model } = require('mongoose')

const signatureSchema = new Schema(
    {
        imageURL: {
            type: String,
            required: true
        }
    }
)

const Signature = model("Signature", signatureSchema)
module.exports = Signature