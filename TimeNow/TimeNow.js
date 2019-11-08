import React, { Component } from "react";
import "./TimeNow.css";
import { enUS, eo, pt } from "date-fns/locale";
import { startOfToday } from "date-fns/startOfToday"
import { format } from "date-fns"


class City extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h6>
          {format((this.props.newTime), "dd")} de {format(
            (this.props.newTime), "LLLL", { locale: require("date-fns/locale/pt") })} de {format((this.props.newTime), "y")}
        </h6>
      </div>
    );
  }
}

export default City;
