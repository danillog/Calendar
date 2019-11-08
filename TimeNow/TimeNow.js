import React, { Component } from "react";
import "./TimeNow.css";
import { enUS, eo, pt } from "date-fns/locale";
import { startOfToday } from "date-fns/startOfToday";
import { format } from "date-fns";

class TimeNow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="row">
        <h6>{format(this.props.newTime, "dd")} de</h6>
        <h6 class="mounth">
           {format(this.props.newTime, "LLLL", {
            locale: require("date-fns/locale/pt")
          })}{" "} 
        </h6>
        <h6> de {format(this.props.newTime, "y")}</h6>
      </div>
    );
  }
}

export default TimeNow;
