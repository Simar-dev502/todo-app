const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user._id
  });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { status, search, page = 1 } = req.query;

  const query = { user: req.user._id };

  if (status) query.status = status;
  if (search) query.title = { $regex: search, $options: "i" };

  const tasks = await Task.find(query)
    .sort({ createdAt: -1 })
    .limit(5)
    .skip((page - 1) * 5);

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};