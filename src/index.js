import React from "react";
import ReactDOM from "react-dom/client"

import Users from './Users';

function Greeting({name}) {
    return <h1>Hello, {name}</h1>;
}

export default function App() {
    return ( 
        <div className="App">
            <Users />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
