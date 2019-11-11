import React, { Component } from "react";
import "./BigCalendar.css";
import {
  format,
  addDays,
  parseISO,
  isToday,
  endOfWeek,
  startOfWeek,
  isBefore
} from "date-fns";
import startOfToday from "date-fns/startOfToday";
import { enUS, eo, pt } from "date-fns/locale";

class BigCalendar extends Component {
  constructor() {
    super();
    let today = new Date();
    this.state = {
      today: today,
      week: this.buildWeek(today),
    };
  }

  buildWeek = dateWeek => {
    let startWeek = startOfWeek(dateWeek);
    let endWeek = endOfWeek(dateWeek);
    let iterator = startWeek;
    let week = [];
    while (isBefore(iterator, endWeek)) {
      week.push(
        <div class="col-sm cell">
          <div
            className={
              "row day " +
              (iterator.getDate() == dateWeek.getDate() ? "itsToday" : "") +
              (iterator.getDate() == startWeek.getDate() ? " weekend" : "") +
              (iterator.getDate() == endWeek.getDate() ? " weekend" : "")
            }
          >
            <div class="col-12">
              <p>
                {format(iterator, "ccc", {
                  locale: require("date-fns/locale/pt")
                })}
              </p>
            </div>
            <div class="col-12">
              <p>{format(iterator, "d")}</p>{" "}
            </div>
          </div>
        </div>
      );
      iterator = addDays(iterator, 1);
    }

    return week;
  };

  render() {
    this.state.today !== this.props.newTime &&
      this.setState({
        today: this.props.newTime,
        week: this.buildWeek(this.props.newTime)
      });
    return (
      /*
    O componente exibirá o dia do mês e o dia da semana. Será divido em 7 (com a opção fins de semana ativada) ou 
    em 5 (com a opção semana ativada). 
    Ele receberá um arquivo do componente filho que será exibido conforme a semana. (array interno de mensagens)
*/
      <div class="col-lg">
        <div id="semana">
          <div class="row dias seven-cols">{this.state.week}</div>
        </div>
      </div>
    );
  }
}

export default BigCalendar;
