import { Component } from 'react';
import {getTricks} from "../apiCalls.js"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;