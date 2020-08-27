import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import NewBoxForm from "./NewBoxForm.js";
import Box from "./Box.js";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { width: 190, height: 120, boxColor: "purple", id: uuidv4() },
        { width: 100, height: 100, boxColor: "yellow", id: uuidv4() },
      ],
    };
    this.handleNewBox = this.handleNewBox.bind(this);
  }

  renderBoxes() {
    return this.state.boxes.map((box) => (
      <Box
        key={box.id}
        height={`${box.height}px`}
        width={`${box.width}px`}
        boxColor={box.boxColor}
      />
    ));
  }

  handleNewBox(obj) {
    this.setState((st) => {
      let newObj = { ...obj, id: uuidv4() };
      return {
        boxes: [...st.boxes, newObj],
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
