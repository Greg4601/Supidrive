import React from "react";
import ReactDOM from "react-dom";
import MyDriveList from "./../myDriveList";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MyDriveList />, div);
})