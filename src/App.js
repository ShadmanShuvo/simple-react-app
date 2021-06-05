import React from "react";
import Card from "./components/Card";

function App() {
    return <div>
        <h1 className="headingStyle">Todo App</h1>
        <Card titleText="Title One" descText="Description One" />
        <Card titleText="Title Two" descText="Description Two" />
        <Card titleText="Title Three" descText="Description Three" />
    </div>
}

export default App;