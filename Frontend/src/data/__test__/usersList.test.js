import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./../usersList";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UsersList />, div);
})