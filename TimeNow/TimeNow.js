import React, { Component } from "react";
import "./TimeNow.css";
import { enUS, eo, pt } from "date-fns/locale";
import { startOfToday } from "date-fns/startOfToday"
import { format } from "date-fns"


class City extends Component {
  constructor(props){
    super(props);
    let today = new Date();
    this.state = {
      day: format(today, "dd"),
      month: format(today, "LLLL", { locale: require("date-fns/locale/pt") }),
      year: format (today, "y")
    };
    
  }
  render() {
    return (
      <div>
        <h6>{this.state.day} de {this.state.month} de {this.state.year}</h6>
      </div>
    );
  }
}

export default City;
