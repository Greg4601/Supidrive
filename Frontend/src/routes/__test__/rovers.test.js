import React from "react";
import ReactDOM from "react-dom";
import Rovers from "../rovers";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Rovers />, div);
})