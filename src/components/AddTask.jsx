import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import generators from '../lib/generators';

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      id: 0,
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
    const { title, id } = this.state;
    if (id > 0) {
      onCreate({ title, id });
      this.setState({ title: '', id: 0 });
    }
  }

  render() {
    const { title } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input type="text" value={title} name="title" onChange={this.handleChange} />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
