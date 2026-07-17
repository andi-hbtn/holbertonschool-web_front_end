import React, { useState } from "react";

function ColorChangerChild({ changeColor }) {
    return (
        <button onClick={() => changeColor("lightblue")}>
            Change Parent Background
        </button>
    );
}

export default function ColorChangerParent() {
    const [bgColor, setBgColor] = useState("ffffff");

    return (
        <div style={{ backgroundColor: bgColor, padding: "20px" }}>
            <h2>Parent Background Color Demo</h2>
            <ColorChangerChild changeColor={setBgColor} />
        </div>
    );
}