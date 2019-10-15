const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    roomName: { type: String, required: true },
    messages: { type: Object },
  }
);

module.exports = mongoose.model('Chat', chatSchema);
