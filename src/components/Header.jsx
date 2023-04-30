import React, { Component } from 'react';
import linkedinIMG from '../img/linkedin.png';
import gitHubIMG from '../img/github.png';
import '../index.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section>
        <h1>To Do List</h1>
        <nav>
          {' '}
          <a
            href="https://www.linkedin.com/in/alessandra-romualdo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIMG} alt="linkedin" />

          </a>
          <a
            href="https://github.com/AlessandraRomualdo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubIMG} alt="github" />

          </a>
        </nav>
      </section>
    );
  }
}
