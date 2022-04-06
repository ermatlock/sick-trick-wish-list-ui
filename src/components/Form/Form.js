import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
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
        <input classname="trick-name"
          type="text"
          placeholder="trick"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <select name="stance" value={this.state.stance} onChange={(event) => this.handleChange(event)}>
          <option>--Please choose a stance--</option>
          <option name="stance" value="regular">regular</option>
          <option name="stance" value="switch">switch</option>
        </select>

        <select name="obstacle" value={this.state.stance} onChange={(event) => this.handleChange(event)}>
          <option>--Please choose an obstacle--</option>
          <option name="obstacle" value="flat ground">flat ground</option>
          <option name="obstacle" value="ledge">ledge</option>
          <option name="obstacle" value="rail">rail</option>
          <option name="obstacle" value="stairs">stairs</option>
          <option name="obstacle" value="pool">pool</option>
        </select>

        {/* <input
          type="text"
          placeholder="obstacle"
          name="obstacle"
          value={this.state.obstacle}
          onChange={(event) => this.handleChange(event)}
        /> */}

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
