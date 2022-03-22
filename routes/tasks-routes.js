const express = require('express');
const { getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask } = require('../controllers/tasks-controller');
const router = express.Router();

router.get('/', getAllTasks).post('/',createTask);
router.get('/:id', getSingleTask).patch('/:id', updateTask).delete('/:id', deleteTask);

module.exports = router;