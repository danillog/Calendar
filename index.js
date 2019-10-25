import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SmallCalendar from './SmallCalendar/SmallCalendar';
import Calendario from './Calendario/calendario';




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
          <div class="col-lg-3 cp">
            <h2> cp </h2>
            <SmallCalendar />
          </div>  
          <div class="col-lg cg">
            <h3> cg</h3>
            <Calendario />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));