import React from "react";
import ReactDOM from "react-dom";
import MissionDetails from "../missionDetails";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MissionDetails />, div);
})