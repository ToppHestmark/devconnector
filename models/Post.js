const mongoose = require("mongoose");

const userTypesObjId = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "users",
};

const PostSchema = new mongoose.Schema({
  user: userTypesObjId,
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [{ user: userTypesObjId }],
  comments: [
    {
      user: userTypesObjId,
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
