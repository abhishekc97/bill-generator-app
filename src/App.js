import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <div>
            <div className="App">
                <div className="approuter-container">
                    <AppRouter />
                </div>
            </div>
        </div>
    );
}

export default App;
