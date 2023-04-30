// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Task extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      id: data.id,
      hasFinished: false,
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    const { onUpdate } = this.props;
    const currentState = this.state;
    this.setState({ hasFinished: event.target.checked });
    onUpdate({ ...currentState, hasFinished: event.target.checked });
  }

  render() {
    // const { hasFinished } = this.state;
    const { data, onRemove, checked } = this.props;
    const { title, id } = data;
    return (
      <div>
        <label htmlFor="check">
          <input type="checkbox" name="" id="check" checked={checked} onChange={this.handleCheckbox} />
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
  onUpdate: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
