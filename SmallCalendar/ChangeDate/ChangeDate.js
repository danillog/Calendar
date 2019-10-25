import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class ChangeDate extends Component {
  
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
     <div class="box"> </div>
    );
  }
}


render(<ChangeDate />, document.getElementById('root'));
