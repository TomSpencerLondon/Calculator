import React from 'react';
import './App.css';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }
  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render(){
    return (
      <div className="component-app">
        <ButtonPanel
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
