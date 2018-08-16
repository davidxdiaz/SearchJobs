import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Principal extends Component {
  constructor() {
    super();
    this.state = {
      empleo: ''
    };
  }

  render() {
    return (
      <div className = "container">
      <center>
            <h2>Search Project</h2>
        <input
          type="text"
          value={this.state.empleo}
          onChange={e => this.setState({ empleo: e.target.value })}
        />
        <Link to={`/resultados/${this.state.empleo}`} className="button button-primary">
          Buscar
        </Link>
        </center>
      </div>
    );
  }
}

export default Principal;