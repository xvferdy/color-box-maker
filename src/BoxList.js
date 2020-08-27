import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm.js";
import Box from "./Box.js";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { width: 190, height: 120, boxColor: "purple" },
        { width: 100, height: 100, boxColor: "yellow" },
      ],
    };
    this.handleNewBox = this.handleNewBox.bind(this);
  }

  renderBoxes() {
    return this.state.boxes.map((box) => (
      <Box
        height={`${box.height}px`}
        width={`${box.width}px`}
        boxColor={box.boxColor}
      />
    ));
  }

  handleNewBox(obj) {
    this.setState((st) => {
      return {
        boxes: [...st.boxes, obj],
      };
    });
  }
  render() {
    return (
      <div className="BoxList">
        <h1>Not Fancy Box Maker</h1>
        <NewBoxForm newBox={this.handleNewBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
