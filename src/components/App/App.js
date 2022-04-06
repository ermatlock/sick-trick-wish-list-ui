import { Component } from 'react';
import {getTricks, postTrick} from "../../apiCalls.js"
import Tricks from "../Tricks/Tricks"
import Form from "../Form/Form"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    getTricks()
    .then((data) => this.setState({tricks: data}))
    .catch((error) => console.warn(error))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        {!this.state.tricks && <h2>You don't have any tricks yet. Add some!</h2>}
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;