import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { enUS, eo, pt } from 'date-fns/locale';
import { addDays } from 'date-fns/fp';
import { subMonths, addMonths, format, parseISO  } from 'date-fns';
import startOfToday from 'date-fns/startOfToday';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class calendarioPe  extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(startOfToday()),
      mes : format(new Date(), 'MMMM',{locale: require('date-fns/locale/pt')}),
      ano : format(new Date(), 'yyyy')
    };
   //let mes = format(new Date(), 'MMMM',{locale: require('date-fns/locale/pt')});
   let ano = "ano";
  }

 
 // ano = format(new Date(startOfToday()), 'yyyy')
 

  alerta = () => {
    alert(this.state.mes)
  }
  previous = () => {
    this.setState({
      date: subMonths((this.state.date),1),
       mes: format(subMonths((this.state.date),1), 'MMMM',{locale: require('date-fns/locale/pt')}),
       ano: format(subMonths((this.state.date),1),'yyyy')
      });
    //this.mes = format(new Date(this.state.date), 'MMMM',{locale: require('date-fns/locale/pt')});
    this.alerta();
  }
  next = () => {
    this.setState({
      date: addMonths((this.state.date),1),
       mes: format(addMonths((this.state.date),1), 'MMMM',{locale: require('date-fns/locale/pt')}),
       ano: format(addMonths((this.state.date), 1), 'yyyy') 
      });
    
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
                <button type="button" class="btn btn-outline-primary btn-sm btn-right" onClick = {this.previous} >
                 <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </th>
              <th colspan="3" id="mounthAndYear" >  {this.state.mes} de {this.state.ano}</th>
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