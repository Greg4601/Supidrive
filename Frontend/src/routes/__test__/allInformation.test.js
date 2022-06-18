import React from "react";
import ReactDOM from "react-dom";
import AllInformation from "../allInformation";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AllInformation />, div);
})