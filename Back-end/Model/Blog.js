const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

blogSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

blogSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Blog", blogSchema);
