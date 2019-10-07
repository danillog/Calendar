import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Calendario from './Calendario/calendario';
import CalendarioPe from '.CalendarioPe/calendarioPe';



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
            <CalendarioPe />
          </div>  
          <div class="col-sm">
            <h3> Calendario grande</h3>
            <Calendario />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
