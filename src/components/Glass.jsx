import React, { Component } from "react";

export default class Glass extends Component {
  render() {
    let { itemGlass } = this.props;
    return (
      <div
        className="col-2 d-flex justify-content-center align-items-center"
        style={{ cursor: "pointer", width: "170px" }}
        onClick={() => {
          this.props.changeGlass(itemGlass.id);
        }}
      >
        <img
          className="w-100 itemImg"
          src={`./glassesImage/g${itemGlass.id}.jpg`}
          alt=""
        />
      </div>
    );
  }
}
