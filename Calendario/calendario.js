import React, { Component } from 'react';
import './styles.css';

class calendarioPe  extends Component {
  render(){

    return (
     /*
      Talvez para fazer o calendario pequeno seja melhor uma tabela 
      */
    <div class="col-lg cg">
            <div id="semana">
              <div class="row dias seven-cols">
                <div class="col-sm cell">
                  <div class="row day">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Dom</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>13</p>{" "}
                    </div>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                  <div class="video">
                    <h4> Video conferencia Ponta Porã X Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm cell">
                  <div class="row day">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Seg</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>14</p>{" "}
                    </div>
                  </div>
                  <div class="video">
                    <h4> Video conferencia Ponta Porã X Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm cell">
                  <div class="row day" id="itsToday">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Ter</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>15</p>{" "}
                    </div>
                  </div>
                  <div class="video">
                    <h4> Video conferencia Ponta Porã X Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>

                  <div class="video">
                    <h4> Video conferencia Ponta Porã X Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                  <div class="video">
                    <h4> Video conferencia Ponta Porã X Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm cell">
                  <div class="row day">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Qua</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>16</p>{" "}
                    </div>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm cell">
                  <div class="row day">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Qui</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>17</p>{" "}
                    </div>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm cell">
                  <div class="row day">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Sex</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>18</p>{" "}
                    </div>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
                <div class="col-sm cell">
                  <div class="row day">
                    {" "}
                    <div class="col-12">
                      {" "}
                      <p>Sab</p>
                    </div>
                    <div class="col-12">
                      {" "}
                      <p>19</p>{" "}
                    </div>
                  </div>
                  <div class="presencial">
                    <h4> Dourados </h4>
                    <p>
                      {" "}
                      rem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis eu dui id felis porta placerat. Praesent ac iaculis
                      metus. Nullam gravida ac nunc nec viverra. Praesent ligula
                      odio, mattis eget scelerisque non.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
    );
  }
}

export default calendarioPe;