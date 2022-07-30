const { Schema, model } = require('mongoose')

const signatureSchema = new Schema(
    {
        imageURL: {
            type: String,
            unique: true
        }
    }
)

const Signature = model("Signature", signatureSchema)
module.exports = Signature