import React, { Component } from "react";
import "./styles.css";

class City extends Component {
  constructor(props) {
    super(props);
    let cityList = [
      "Dourados",
      "Ponta Porã",
      "Campo Grande",
      "Três Lagoas",
      "São Paulo"
    ];
    this.state = {
      selectCity: "",
      citys: this.buildCity(cityList)
    };
  }
  select = ev => {
    let city = ev.currentTarget;
    this.setState({selectCity: city});
    console.log(city);
    this.props.clickCity(city)

  };

  buildCity = cityList => {
    let city = [];
    let i = 0;
    let key = 0

    while (i < 5) {
      city.push(
        <a 
          key = {key++}
          onClick={this.select}
          className={"list-group-item list-group-item-action"}
        >
          {cityList[i]}
        </a>
      );
      i++;
    }
    return city;
  };

  render() {
     
    return <div class="list-group" onClick = {console.log(this.state.selectCity)}>{this.state.citys}</div>;
  }
}

export default City;
