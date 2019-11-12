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
      cities: this.buildCity(cityList)
    };
  }
  select = ev => {
    console.log(this);
    console.log(ev);
    let city = ev.currentTarget;
    console.log(city);
    this.setState({selectCity: city});
    
  };

  buildCity = cityList => {
    let city = [];
    let i = 0;
    let key = 0

    while (i < 5) {
      city.push(<li className={"list-group-item"}>
        <a 
          key = {key++}
          onClick={this.select}
          className={"list-group-item list-group-item-action"}
        >
          {cityList[i]}
        </a></li>
      );
      i++;
    }
    return city;
  };

  render() {
     
    return <ul class="list-group">{this.state.cities}</ul>;
  }
}

export default City;
