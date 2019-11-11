import React, { Component } from "react";
import "./styles.css";

class City extends Component {
  constructor() {
    super();
    this.state = {
      selectCity: "Dourados",
      citys: this.buildCity
    };
  }
  select = ev => {
    let city = this.state.selectCity;
    this.props.clickCity(city);
  };

  buildCity = () => {
    let cityList = [
      "Dourados",
      "Ponta Porã",
      "Campo Grande",
      "Três Lagoas",
      "São Paulo"
    ];
   
    let city = [];
    let i = 0;
   
    while (i < 4) {
      city.push(
        <a
          onClick={this.select(cityList[i])}
          className={"list-group-item list-group-item-action"}
        >
          {cityList[i]}a
        </a>
      );
      i++;
    }
    return city;
  };

  render() {
   
    return (<div class="list-group">{this.state.citys}</div>);
  }
}

export default City;
