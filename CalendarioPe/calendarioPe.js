import React, { Component } from 'react';
import './style.css';
import { format, parse } from 'date-fns';
import { enUS, eo } from 'date-fns/locale';
import { addDays, addHours } from 'date-fns/fp';
import { format, compareAsc } from 'date-fns';




class calendarioPe  extends Component {
  render(){
    /*
    const data = {
      dia: format(new Date (Date.), 'd'),
      mes: format(new Date (Date), 'MMMM'),
      ano: format(new Date(Date), 'yyyy')

    const newYears = new Date(‘2019/01/01’);
const frenchLocale = require(‘date-fns/locale/fr’);
const formattedDate = format(
    newYears,
    ‘MMMM DD, YYYY’,
    { locale: frenchLocale }
);

    } */

    const  br = require('date-fns/locale/pt-b');
    const M = 9
    const mes = format(new Date(2017, M, 6), 'MMMM', {locale: br})
    const ano = format(new Date(2017, 10, 6), 'yyyy')
    return (
     /*
      Talvez para fazer o calendario pequeno seja melhor uma tabela 
      */
        
        
          <table class="table table-striped">
            <thead>
            <tr>
              <th colspan="2"> 
                <button type="button" class="btn btn-outline-secondary btn-lg">Ant</button>
              </th>
              <th colspan="3" id="data">{mes} de {ano}</th>
              <th colspan="2">
                <button type="button" class="btn btn-outline-secondary btn-lg">Pro</button> 
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
            <tbody>
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