const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const Courses = model("courses", courseSchema);

module.exports = Courses;
