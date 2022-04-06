import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor({ addTrick }) {
    super();
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearInputs = () => {
    this.setState({ stance: "", name: "", obstacle: "", tutorial: "" });
  };

  submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addTrick(newTrick);
    this.clearInputs();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="trick"
          name="trick"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="stance"
          name="stance"
          value={this.state.stance}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="obstacle"
          name="obstacle"
          value={this.state.obstacle}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="tutorial"
          name="tutorial"
          value={this.state.tutorial}
          onChange={(event) => this.handleChange(event)}
        />

        <button onClick={(event) => this.submitTrick(event)}>SEND IT</button>
      </form>
    );
  }
}

export default Form;
