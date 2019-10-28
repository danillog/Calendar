import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SmallCalendar from './SmallCalendar/SmallCalendar';
import Calendario from './Calendario/calendario';
import City from './City/City';



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
           <div class ="row justify-content-around"> <SmallCalendar /> </div>
           <div class ="row justify-content-around"> <City /> </div> 
            
            

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