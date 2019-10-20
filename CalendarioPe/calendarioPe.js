import React, { Component } from 'react';
import './style.css';
import { format, parse } from 'date-fns';
import { enUS, eo, pt } from 'date-fns/locale';
import { addDays, addHours } from 'date-fns/fp';
import { format, compareAsc } from 'date-fns';
import { subMonths, addMonths, parseISO } from 'date-fns';
import startOfToday from 'date-fns/startOfToday';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class calendarioPe  extends Component {
  constructor(props){
    super(props);
    this.state = {
      dateFixa : new Date(),
      mes : format( new Date(this.state.dateFixa), 'MMMM',{locale:  require('date-fns/locale/pt')})
    
    };
  }

 
 // ano = format(new Date(startOfToday()), 'yyyy')

  alerta = () => {
    alert( this.state.mes )
  }

 


  next = () => {
    let addMes = addMonths((this.state.dateFixa), 1)
    alert(addMes)
  }
  previous = () => {
    
  }
  
  render(){

  /*
    const  br = require('date-fns/locale/pt');
    let dateFix = new Date(startOfToday());
    let data = {
      dia: format(new Date (startOfToday()), 'd'),
      mes: format((dateFix), 'MMMM',{locale: br}),
      ano: format(new Date(startOfToday()), 'yyyy')

    } 
  

    const week = document.createElement("tr");
    const day = document.createElement("td");
    
    function next(){
      this.dateFix = subMonths((this.dateFix), 1)
      this.data.mes = format((this.dateFix), 'MMMM',{locale: br})
    }
    function previous(){
      this.dateFix = subMonths((this.dateFix), 1)
      this.data.mes = format((this.dateFix), 'MMMM',{locale: br})
    }
*/

    return (
     /*
    
      O que fazer ?
        + Construir os dias da semana no calendario, utilizano o js para deixar o codigo menor.

        + 
      */
        
        
          <table class="table ">
            <thead class="thead-dark">
            <tr>
              <th colspan="2" class="botao"> 
                <button type="button" class="btn btn-outline-primary btn-sm btn-right" onClick = {this.alerta} >
                 <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </th>
              <th colspan="3" id="mounthAndYear">{this..mes} de </th>
              <th colspan="2" class="botao">
                <button type="button" class="btn btn-outline-primary btn-sm btn-left" onClick ={this.next} >
                 <FontAwesomeIcon icon={faChevronRight} />
                </button> 
              </th>
            </tr>
              <th scope="col">Dom</th>
              <th scope="col">Seg</th>
              <th scope="col">Ter</th>
              <th scope="col">Qua</th>
              <th scope="col">Qui</th>
              <th scope="col">Sex</th>
              <th scope="col">Sab</th>
            </thead>
            <tbody id="mounth">
              <tr>
                <td>01</td>
                <td>02</td>
                <td>03</td>
                <td>04</td>
                <td>05</td>
                <td>06</td>
                <td>07</td>
              </tr>
               <tr>
                <td>09</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
              </tr>
               <tr>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
              </tr>
              <tr>
                <td>30</td>
                <td>31</td>
              </tr>

            </tbody>
          </table>


    );
  }
}

export default calendarioPe;