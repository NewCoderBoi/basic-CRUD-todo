const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name for the task'],
        maxlength: [20, 'Max length of task name is 20']
    },
    completed: Boolean
});

// Read mongoose documentation.

module.exports = mongoose.model('Tasks', TaskSchema);