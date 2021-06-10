import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import Card1 from "./components/Card1";
import STATE from "./STATE";

function App() {
    return <div>
        <h1 className="headingStyle">Todo App</h1>
        {
            Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)
        }
        <Card1 name="Class component" />
        <STATE />
    </div>
}

export default App;