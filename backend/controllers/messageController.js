const Message = require("../models/Message");

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.status(200).json(messages.map((msg) => msg.text));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMessages };