const mongoose = require("mongoose");

const Project = mongoose.model("Project");

module.exports = {
  async index(req, res) {
    const projects = await Project.find();

    return res.json(projects);
  },
  async show(req, res) {
    const project = await Project.findById(req.params.id);

    return res.json(project);
  },
  async store(req, res) {
    const project = await Project.create(req.body);

    return res.json(project);
  },
  async update(req, res) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(project);
  },
  async createTask(req, res) {
    const id = req.params.id;
    const project = await Project.findById(id).lean();
    const newTask = req.body.title;
    let tasks = project.tasks;

    tasks.push(newTask);

    await Project.findByIdAndUpdate(id, { tasks }, { new: true });

    return res.json(project);
  },
  async destroy(req, res) {
    await Project.findByIdAndRemove(req.params.id);

    return res.send(204);
  }
};
