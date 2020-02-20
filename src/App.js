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
      <div className="card-wrap">
        <Card title="Inspirational Quote">
          <div className="card-body">
            <div className="inspirational-quote">
              Inspirational quote here...
            </div>
            <div className="quote-author">⁠— author of quote here</div>
          </div>
          <Button type="primary" size="large">
            Create New Quote
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default App;
