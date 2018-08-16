import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jsonlista from './listadetrabajos';

export class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palabra: this.props.match.params.empleo,
    };
  }

  render() {
    return (
      <div className = "container">
        <Link className = "button button-primary" to="/">Regresar</Link>
        <ul>
            {jsonlista.filter((trabajo)=>{
                return (
                    trabajo.title.includes(`${this.state.palabra}`) ||
                    trabajo.description.includes(`${this.state.palabra}`) 
                )

            }).map(trabajo=>(
                <li key={trabajo.id}>
                    <a ref = {trabajo.how_to_apply}>{trabajo.title}</a>
                </li>    
            ))
            }
        </ul>
      </div>
    );
  }
}

export default Resultados;