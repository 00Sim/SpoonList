import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoImportance = this.onChangeTodoImportance.bind(this);
        this.onChangeTodoPred_Spoon = this.onChangeTodoPred_Spoon.bind(this);
        this.onChangeTodoActual_Spoon = this.onChangeTodoActual_Spoon.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_importance: '',
            todo_pred_spoon: 1,
            todo_actual_spoon: 1,
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoImportance(e) {
        this.setState({
            todo_importance: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: e.target.value
        });
    }

    onChangeTodoPred_Spoon(e) {
        this.setState({
            todo_pred_spoon: e.target.value
        });
    }

    onChangeTodoActual_Spoon(e) {
        this.setState({
            todo_actual_spoon: e.target.value
        });
    }

    onSubmit(e) {
         e.preventDefault();

         console.log(`Form submitted:`);
         console.log(`Todo Description: ${this.state.todo_description}`);
         console.log(`Todo Importance: ${this.state.todo_importance}`);
         console.log(`Todo Actual Spoon: ${this.state.todo_actual_spoon}`);
         console.log(`Todo Pred Spoon: ${this.state.todo_pred_spoon}`);
         console.log(`Todo Priority: ${this.state.todo_priority}`);

         const newTodo = {
             todo_description: this.state.todo_description,
             todo_importance: this.state.todo_importance,
             todo_pred_spoon: this.state.todo_pred_spoon,
             todo_actual_spoon: this.state.todo_actual_spoon,
             todo_completed: this.state.todo_completed
         };

         axios.post('http://localhost:4000/todos/add', newTodo)
             .then(res => console.log(res.data));

         this.setState({
             todo_description: '',
             todo_importance: 0,
             todo_pred_spoon: 1,
             todo_actual_spoon: 1,
             todo_completed: false
         })
     }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Importance: </label>
                        <input
                                type="Number"
                                className="form-control"
                                value={this.state.todo_importance}
                                onChange={this.onChangeTodoImportance}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
