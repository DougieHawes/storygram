const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      author: { type: Schema.Types.ObjectId },
      avatar: { type: String },
      text: { type: String, required: true },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  datePosted: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Post", postSchema);
