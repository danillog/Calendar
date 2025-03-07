import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { enUS, eo, pt } from "date-fns/locale";
import {
  subMonths,
  addMonths,
  format,
  isBefore,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  isEqual,
  isSunday,
  isSaturday,
  subDays,
  addDays,
  parseISO,
  getDayOfYear
} from "date-fns";
import startOfToday from "date-fns/startOfToday";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames, createClass } from "classnames/bind";

class SmallCalendar extends Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      date: today,
      month: format(today, "MMMM", { locale: require("date-fns/locale/pt") }),
      year: format(today, "yyyy"),
      calendar: this.buildCalendar(today),
      isActive: 0
    };
  }

  previous = () => {
    let previousDate = subMonths(this.state.date, 1);
    //A variavel date serve para modificar a semana , pois o mes e ano possuem formatos diferentes de date, estes são strings
    this.setState({
      date: previousDate,
      month: format(previousDate, "MMMM", {
        locale: require("date-fns/locale/pt")
      }),
      year: format(previousDate, "yyyy"),
      calendar: this.buildCalendar(previousDate)
    });
  };

  next = () => {
    let nextDate = addMonths(this.state.date, 1);
    //A variavel date serve para modificar a semana , pois o mes e ano possuem formatos diferentes de date, estes são strings
    this.setState({
      date: nextDate,
      month: format(nextDate, "MMMM", {
        locale: require("date-fns/locale/pt")
      }),
      year: format(nextDate, "yyyy"),
      calendar: this.buildCalendar(nextDate)
    });
  };

  activeFocus = ev => {
    let clickDate = parseISO(ev.currentTarget.dataset.iterator);

    this.setState({
      month: format(clickDate, "MMMM", {
      locale: require("date-fns/locale/pt")
      }),
      year: format(clickDate, "yyy"),
      date: clickDate,
      calendar: this.buildCalendar(clickDate)
    });
    this.props.clickCalendar(clickDate);
    //alert("voce clicou na data: " + ev.currentTarget.dataset.iterator); className= {'active'}
    //    ev.currentTarget.dataset.iterator
  };
  onMonthChanged = () => {};

  buildCalendar = referenceDate => {
    let currentDate = referenceDate;

    let startWeek = startOfMonth(currentDate);

    while (!isSunday(startWeek)) {
      startWeek = subDays(startWeek, 1);
    }

    let endWeek = endOfMonth(currentDate);

    while (!isSaturday(endWeek)) {
      endWeek = addDays(endWeek, 1);
    }

    let nextMonth = addDays(endWeek, 1);
    let calendar = [];
    let iterator = startWeek;
    let key = 0;
    while (isBefore(iterator, endWeek)) {
      let week = [];
      for (let i = 0; i < 7 && isBefore(iterator, nextMonth); i++) {
        week.push(
          <td
            data-iterator={format(iterator, "yyy-MM-dd") + "T00:00:00"}
            onClick={this.activeFocus}
            className={
              getDayOfYear(iterator) == getDayOfYear(currentDate)
                ? "active"
                : ""
            }
          >
            {format(iterator, "dd")}
          </td>
        );
        iterator = addDays(iterator, 1);
      }
      calendar.push(<tr key={key++}>{week}</tr>);
    }

    return calendar;
  };

  dateReturn = () => {
    time = this.state.date;
    return time;
  };

  render() {
    return (
      <div class="all">
        <table class="table ">
          <thead class="thead-dark">
            <tr>
              <th colspan="2" class="botao">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm btn-right"
                  onClick={this.previous}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </th>
              <th colspan="3" id="mounthAndYear" onclick={this.onMonthChanged}>
                <button class="btn btn-outline-primary botton-date">
                  {this.state.month} de {this.state.year}
                </button>
              </th>
              <th colspan="2" class="botao">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm btn-left"
                  onClick={this.next}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </th>
            </tr>
            <th scope="col" class="hide">
              Dom
            </th>
            <th scope="col" class="hide">
              Seg
            </th>
            <th scope="col" class="hide">
              Ter
            </th>
            <th scope="col" class="hide">
              Qua
            </th>
            <th scope="col" class="hide">
              Qui
            </th>
            <th scope="col" class="hide">
              Sex
            </th>
            <th scope="col" class="hide">
              Sab
            </th>
          </thead>
          <tbody id="mounth" class="hide">
            {this.state.calendar}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SmallCalendar;
