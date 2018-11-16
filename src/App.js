import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinjas from './addNinjas'
import './App.css';

class App extends Component {
 state = {
  ninjas: [
    { id:1, name:"Ryan", age:30, belt:"Blak" },
    { id:2, name:"Jorj", age:25, belt:"Beown" },
    { id:3, name:"David", age:34, belt:"Pink" },
  ]
 }

 addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas
    });
 }

 deleteNinja = (id) => {
   const ninjas = this.state.ninjas.filter(n => n !== id);
   this.setState({ ninjas });
 }

  render() {
    return (
      <div>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinjas addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
