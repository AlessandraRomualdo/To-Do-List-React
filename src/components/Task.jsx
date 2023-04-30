// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../index.css';

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
      <div className="card-task">
        <h3>{title}</h3>
        <div className="container-task">
          <label htmlFor={checked}>
            <input className="check" type="checkbox" name="" id="check" checked={checked} onChange={this.handleCheckbox} />
            Concluido
          </label>
          <button className="shadow-2xl rounded-full bg-sky-500 hover:bg-sky-700 ..." type="button" onClick={() => onRemove(id)}>Remover</button>
        </div>
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
