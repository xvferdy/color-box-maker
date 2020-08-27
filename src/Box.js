import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.boxColor,
      id: this.props.id,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.state);
  }

  render() {
    let boxStyle = {
      width: this.state.width,
      height: this.state.height,
      backgroundColor: this.state.backgroundColor,
    };

    return (
      <div>
        <div className="Box" style={boxStyle}>
          Box
        </div>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

export default Box;
