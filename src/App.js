import React from "react";
import "./App.css";
import "./media.css";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="intro">
          <div className="quotation">“</div>
          <div className="app-title">Quote Creator</div>
          <div className="app-description">
            Create an inspirational quote with a single click
          </div>
          <div className="button-wrap">
            <Button type="primary">Click me!</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
