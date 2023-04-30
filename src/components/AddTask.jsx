import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import generators from '../lib/generators';
import '../index.css';

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      id: 0,
      hasFinished: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { randomId } = generators;
    const { value, name } = target;
    this.setState({
      id: randomId(999999999),
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onCreate } = this.props;
    const { title, id, hasFinished } = this.state;
    if (id > 0) {
      // cria uma task se o id for maior que 0
      onCreate({ title, id, hasFinished });
      // restaura o estado anterio apos criar uma task
      this.setState({ title: '', id: 0 });
    }
  }

  render() {
    const { title } = this.state;

    return (
      <form className="form-task" onSubmit={this.handleSubmit}>
        <div className="container-form">
          <input className=" placeholder:italic placeholder:text-slate-400 after:content-['*'] after:ml-0.5 after:text-red-500 " placeholder="Escreva uma tarefa" type="text" value={title} name="title" onChange={this.handleChange} />
          <button className="rounded-full shadow-2xl bg-sky-500 hover:bg-sky-700 ..." type="submit">
            Adicionar Tarefa
          </button>
        </div>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
