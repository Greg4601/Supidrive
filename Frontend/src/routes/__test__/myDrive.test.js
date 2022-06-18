import React from "react";
import ReactDOM from "react-dom";
import MyDrive from "../myDrive";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MyDrive />, div);
})