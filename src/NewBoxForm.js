import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      boxColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newBox(this.state);
    this.setState({
      width: "",
      height: "",
      boxColor: "",
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          name="width"
          type="number"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          name="height"
          type="number"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="boxColor">Box Color:</label>
        <input
          id="boxColor"
          name="boxColor"
          type="text"
          value={this.state.boxColor}
          onChange={this.handleChange}
        />
        <button>Create Box!!</button>
      </form>
    );
  }
}

export default NewBoxForm;
