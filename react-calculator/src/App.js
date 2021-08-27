// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import KeypadComponent from './KeypadComponent';
import ResultComponent from './ResultComponent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    
    else {
        this.setState({
            result: this.state.result + button
        })
    }
};


calculate = () => {
  try{
    this.setState({
      // eslint-disable-next-line
      result: (eval(this.state.result) || "" ) + ""
    })
  } catch (e) {
    this.setState({
      result: 'error'
    })
  }
};

reset = () => {
  this.setState({
    result: ""
  })
};

backspace = () => {
  this.setState({
    result: this.state.result.slice(0, -1)
  })
};

  
  render(){
    return (
    <div>
      <div className='calcBody'>
        <h1>Simple Calculator</h1>
        <ResultComponent result={this.state.result}/>
        <KeypadComponent onClick={this.onClick}/>
      </div>
    </div>
    );
  }
}

export default App;

