import React, { Component } from "react";
import "./BigCalendar.css";
import {
  format,
  subDays,
  addDays,
  parseISO,
  isToday 
} from "date-fns";
import startOfToday from "date-fns/startOfToday";

class BigCalendar extends Component {
 constructor() {
    super();

    this.state = {
      date: new Date(),
    };
  }
  render() {
    return (
      /*
    O componente exibirá o dia do mês e o dia da semana. Será divido em 7 (com a opção fins de semana ativada) ou 
    em 5 (com a opção semana ativada). 
    Ele receberá um arquivo do componente filho que será exibido conforme a semana. (array interno de mensagens)
*/
      <div class="col-lg cg">
        <div id="semana">
          <div class="row dias seven-cols">
            <div class="col-sm cell">
              <div class="row day">
                <div class="col-12">
                  <p>Dom</p>
                </div>
                <div class="col-12">
                  <p>13</p>{" "}
                </div>
              </div>
            </div>
            <div class="col-sm cell">
              <div class="row day">
                <div class="col-12">
                  <p>Seg</p>
                </div>
                <div class="col-12">
                  <p>14</p>{" "}
                </div>
              </div>
            </div>
            <div class="col-sm cell">
              <div class="row day" id="itsToday">
                <div class="col-12">
                  <p>Ter</p>
                </div>
                <div class="col-12">
                  <p>15</p>{" "}
                </div>
              </div>
            </div>
            <div class="col-sm cell">
              <div class="row day">
                <div class="col-12">
                  <p>Qua</p>
                </div>
                <div class="col-12">
                  <p>16</p>{" "}
                </div>
              </div>
            </div>
            <div class="col-sm cell">
              <div class="row day">
                <div class="col-12">
                  <p>Qui</p>
                </div>
                <div class="col-12">
                  <p>17</p>{" "}
                </div>
              </div>
            </div>
            <div class="col-sm cell">
              <div class="row day">
                <div class="col-12">
                  <p>Sex</p>
                </div>
                <div class="col-12">
                  <p>18</p>{" "}
                </div>
              </div>
            </div>
            <div class="col-sm cell">
              <div class="row day">
                <div class="col-12">
                  <p>Sab</p>
                </div>
                <div class="col-12">
                  <p>19</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCalendar;
