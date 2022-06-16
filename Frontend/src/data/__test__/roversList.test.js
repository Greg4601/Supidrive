import React from "react";
import ReactDOM from "react-dom";
import RoversList from "./../roversList";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RoversList />, div);
})