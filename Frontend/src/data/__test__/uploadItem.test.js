import React from "react";
import ReactDOM from "react-dom";
import UploadItem from "../uploadItem";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UploadItem />, div);
})