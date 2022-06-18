import React from "react";
import ReactDOM from "react-dom";
import ProfileList from "./../profileList";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProfileList />, div);
})