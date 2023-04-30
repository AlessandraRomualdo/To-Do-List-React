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
    this.updateTasks = this.updateTasks.bind(this);
  }

  componentDidMount() {
    this.loadinTasklocalStoreage();
  }

  loadinTasklocalStoreage() {
    // trazer as tasks do localStorage
    let localStorageTasks = localStorage.getItem('tasks');
    // if para não quebrar a  aplicação quando não houver tasks no localStorage
    if (localStorageTasks) {
      localStorageTasks = JSON.parse(localStorageTasks);
      // atualiza o estado das tasks com o localStorage
      this.setState({ tasks: localStorageTasks });
    }
  }

  updateTasks(updatedTask) {
    // marca a task como concluido
    const { tasks } = this.state;
    const updateTaskes = tasks.map((task) => {
      const taskUpdate = task;
      // atualiza o estado hasFinished para true
      if (taskUpdate.id === updatedTask.id) {
        taskUpdate.hasFinished = updatedTask.hasFinished;
      }
      return taskUpdate;
    });
    // retorna um novo array das tasks atualizado com as concluidas
    this.setState({ tasks: updateTaskes });
    localStorage.setItem('tasks', JSON.stringify(updateTaskes));
  }

  createTask(newtask) {
    // cria uma nova task
    // atualizando o estado tasks
    const { tasks } = this.state;
    // para resolver o problema de assincronocidade so state para salvar no localStorage
    const updateTasks = [...tasks, newtask];
    this.setState({
      tasks: [...tasks, newtask],
    });
    // salvando no localStorage
    localStorage.setItem('tasks', JSON.stringify(updateTasks) || []);
  }

  removeTask(id) {
    // remove uma task
    const { tasks } = this.state;
    // filter retona apenas as tasks que não possui o id da task que sera removida
    const updateTasks = tasks.filter((task) => task.id !== id);
    // atualiza o estados das tasks
    this.setState({ tasks: updateTasks });
    // remove do localStorage
    localStorage.setItem('tasks', JSON.stringify(updateTasks) || []);
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        { tasks.map((task) => (
          <Task
            key={task.id}
            data={task}
            checked={task.hasFinished}
            onRemove={this.removeTask}
            onUpdate={this.updateTasks}
          />
        ))}
      </>
    );
  }
}
