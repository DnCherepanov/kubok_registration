const { Schema, model } = require('mongoose')

const participantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type: {
    type: Array,
  },
  partner: {
    type: String,
  },
})

module.exports = model('participants', participantSchema)
