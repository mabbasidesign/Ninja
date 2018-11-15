import React, { Component } from 'react';
import Ninjas from './Ninjas'
import './App.css';

class App extends Component {
 state = {
  ninjas: [
    { id:1, name:"Ryan", age:30, belt:"Blak" },
    { id:2, name:"Jorj", age:25, belt:"Beown" },
    { id:3, name:"David", age:34, belt:"Pink" },
  ]
 }

  render() {
    return (
      <div>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
