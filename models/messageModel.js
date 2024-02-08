const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  from_user: {
    type: String,
    required: true,
  },
  to_user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date_sent: {
    type: Date,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
