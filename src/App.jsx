import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    // binds das funções
    this.createTask = this.createTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  createTask(newtask) {
    const { tasks } = this.state;
    this.setState({
      tasks: [...tasks, newtask],
    });
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updateTasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updateTasks });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        { tasks.map((task) => (
          <Task key={task.id} data={task} onRemove={this.removeTask} />
        ))}
      </>
    );
  }
}
