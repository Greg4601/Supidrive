import React from "react";
import ReactDOM from "react-dom";
import RoverDetails from "../roverDetails";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RoverDetails />, div);
})