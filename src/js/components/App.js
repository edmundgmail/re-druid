import React from "react";
import ReactDOM from "react-dom";

export default function App() {
    return (
        <div>
            <h1>hello, world</h1>
        </div>
    )
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;