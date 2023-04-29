// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Task extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { data, onRemove } = this.props;
    const { title, id } = data;
    return (
      <div>
        <label htmlFor="check">
          <input type="checkbox" name="" id="check" onChange={this.handleCheckbox} />
          Concluido
        </label>
        <h3>{title}</h3>
        <button type="button" onClick={() => onRemove(id)}>Remover</button>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,

  onRemove: PropTypes.func.isRequired,
};
