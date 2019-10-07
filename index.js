import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';




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
            <calendario></calendario>
          </div>
          <div class="col-sm">
            <h3> Calendario grande</h3>
            <calendario></calendario>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
