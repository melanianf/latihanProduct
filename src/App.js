import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product judul = "Powerbank" harga = "10.000"/>
        <Product judul = "Powerbank" harga = "10.000"/>
        <Product judul = "Powerbank" harga = "10.000"/>
        <Product judul = "Powerbank" harga = "10.000"/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
