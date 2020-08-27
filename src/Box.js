import React, { Component } from "react";

class Box extends Component {
  render() {
    let boxStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.boxColor,
    };
    return (
      <div className="Box" style={boxStyle}>
        Box
      </div>
    );
  }
}

export default Box;
