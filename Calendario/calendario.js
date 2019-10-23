import React, { Component } from 'react';
import './styles.css';

class calendarioPe  extends Component {
  render(){

    return (
     /*
      Talvez para fazer o calendario pequeno seja melhor uma tabela 
      */
    <div class="container" id="semana">
      <div class="row fixo" >
        <div class ="col-sm"> Dom</div>
        <div class ="col-sm"> Seg</div>
        <div class ="col-sm"> Ter</div>
        <div class ="col-sm"> Qua</div>
        <div class ="col-sm"> Qui</div>
        <div class ="col-sm"> Sex</div>
        <div class ="col-sm"> Sab</div>
      </div>
      <div class="row " >
        <div class ="col-sm"> 1</div>
        <div class ="col-sm"> 2</div>
        <div class ="col-sm"> 3</div>
        <div class ="col-sm"> 4</div>
        <div class ="col-sm"> 5</div>
        <div class ="col-sm"> 6</div>
        <div class ="col-sm"> 7</div>
      </div>
      <div class="row">
        <div class ="col-sm"> 8</div>
        <div class ="col-sm"> 9</div>
        <div class ="col-sm"> 10</div>
        <div class ="col-sm"> 11</div>
        <div class ="col-sm"> 12</div>
        <div class ="col-sm"> 13</div>
        <div class ="col-sm"> 14</div>
      </div>
      <div class="row" >
        <div class ="col-sm"> 15</div>
        <div class ="col-sm"> 16</div>
        <div class ="col-sm"> 17</div>
        <div class ="col-sm"> 18</div>
        <div class ="col-sm"> 19</div>
        <div class ="col-sm"> 20</div>
        <div class ="col-sm"> 21</div>
      </div>
      <div class="row">
        <div class ="col-sm"> 22</div>
        <div class ="col-sm"> 23</div>
        <div class ="col-sm"> 24</div>
        <div class ="col-sm"> 25</div>
        <div class ="col-sm"> 26</div>
        <div class ="col-sm"> 27</div>
        <div class ="col-sm"> 28</div>
      </div>
      <div class="row" >
        <div class ="col-sm"> 29</div>
        <div class ="col-sm"> 30</div>
        <div class ="col-sm"> 31</div>
        <div class ="col-sm"> 1</div>
        <div class ="col-sm"> 2</div>
        <div class ="col-sm"> 3</div>
        <div class ="col-sm"> 4</div>
      </div>
    
    </div>
  
    );
  }
}

export default calendarioPe;