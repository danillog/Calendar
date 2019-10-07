import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import calendario from './Calendario/calendario';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <h2> Calendario pequeno</h2>
            <calendario />
          </div>  
          <div class="col-sm">
            <h3> Calendario grande</h3>
            <calendario />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
