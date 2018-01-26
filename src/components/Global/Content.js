import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  
  constructor(){
    // siempre debemos usar el método super para tener acceso al objeto this
    // de esta clase. Puesto que si escribimos codigo y sin usar super(), React nos
    // manda un error
    super();
    // Cuando cambiamos el state, lo que ocurre es que el método render() se vuelve a ejecutar
    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  // Este método sirve para saber si nuestro componente ya cargó
  componentDidMount(){
    this.setState({
      count: 1
    })
  }

  handleInputChanged(e){
    if(e.target.id === "number1"){
      this.setState({
        number1: Number(e.target.value)
      });
    }
    else {
      this.setState({
        number2: Number(e.target.value)
      })
    }
  }

  handleCountClick(e){
    if(e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      })
    }
    else if(e.target.id === "substract"){
      if( this.state.count<=1 ){
        this.setState({
          count: 1
        })
      }else{
        this.setState({
          count: this.state.count - 1
        })
      }
    }
    else {
      this.setState({
        count: 1
      })
    }
  }

  handleResultClick(e){
    this.setState({
      result: this.state.number1 + this.state.number2
    })
  }

  render() {
    console.log( "Estamos por aquí" );
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>
        <div>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="substract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>R</button>
        </div>
        <h2>Calculadora</h2>
        <div>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged} />
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged} />
          <button type="number" onClick={ this.handleResultClick}>=</button>
          <br />
          <input type="number" id="result" value={this.state.result} />
        </div>
      </div>
    );
  }
}

export default Content;
