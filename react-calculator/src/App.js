// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import KeypadComponent from './KeypadComponent';
import ResultComponent from './ResultComponent';

class App extends Component {
  render(){
    return (
    <div>
      <div className='calc-body'>
        <h1>Simple Calculator</h1>
        <KeypadComponent/>
      </div>
    </div>
    );
  }
}

export default App;

// WHY ISN"T THE H1 RENDERING?