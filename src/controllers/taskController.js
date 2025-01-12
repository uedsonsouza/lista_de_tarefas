import { Task } from '../models/taskModel';

exports.getAllTasks = async (_, res) => {
    const tasks = await Task.getAll();
    res.json(tasks);
}

exports.getTask = async (req, res) => {
    const task = await Task.getById(req.params.id);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
}

exports.createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

exports.updateTask = async (req, res) => {
    const task = await Task.update(req.params.id, req.body);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
}

exports.deleteTask = async (req, res) => {
    const task = await Task.delete(req.params.id);
    if (!task) {
        res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
}