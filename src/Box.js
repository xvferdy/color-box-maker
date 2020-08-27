import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBox = this.handleRemoveBox.bind(this);
  }

  handleRemoveBox() {
    this.props.removeBox(this.props.id);

    console.log(this.props.id);
  }
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.handleRemoveBox}>X</button>
      </div>
    );
  }
}
export default Box;
