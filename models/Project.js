const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: String,
  techUsed: [String],
  releaseDate: Date,
  credit: [String],
  screenshotUrl: String,
  videoUrl: String,
  details: String,
});

const Project = model("Project", projectSchema);

module.exports = Project;
