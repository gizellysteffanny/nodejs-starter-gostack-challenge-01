const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Project", ProjectSchema);
