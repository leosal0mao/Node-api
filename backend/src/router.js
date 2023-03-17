const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasks_controller');
const tasksMiddleware = require('./middlewares/tasks_middleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put(
    '/tasks/:id',
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
);

module.exports = router;