const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_importance: {
        type: Number
    },
    todo_completed: {
        type: Boolean
    },
    todo_pred_spoon: {
        type: Number
    },
    todo_actual_spoon: {
        type: Number
    }

});

module.exports = mongoose.model('Todo', Todo);
