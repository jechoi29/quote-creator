import React from "react";
import "./App.css";
import "./media.css";
import { Button, Card } from "antd";
import "antd/dist/antd.css";

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
            <Button type="primary" size="large">
              Create Quote
            </Button>
          </div>
        </div>
      </header>
      <div className="card-wrapper">
        <Card type="inner" title="Inspirational Quote">
          <div className="inspirational-quote">Inspirational quote here...</div>
          <div className="quote-author">author of quote here</div>
        </Card>
      </div>
    </div>
  );
}

export default App;
