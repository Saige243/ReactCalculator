import React, {Component} from 'react';

class KeypadComponent extends Component {
    render(){
        return (
        <div className="Buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <br></br>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <br></br>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
            <br></br>
            <button>.</button>
            <button>0</button>
            <button>=</button>
            <button>÷</button>
        </div>
        );
    }
};
  
  export default KeypadComponent;