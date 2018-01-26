import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';
import PropTypes from 'prop-types'; // validacion que ayuda a definir uqe propiedades debemos recibir, qeu tipo y ver si son necesarias o definidas.

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {

    const { title, items } = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
