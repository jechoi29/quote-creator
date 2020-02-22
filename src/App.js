import React, { useState, useEffect } from "react";
import "./App.css";
import "./media.css";
import { Button, Card } from "antd";
import "antd/dist/antd.css";

function App() {
  const [quote, setQuote] = useState("Famous Quote"); // quote into a string
  const [author, setAuthor] = useState("Author of Quote");
  const [display, setDisplay] = useState(false);

  async function getQuote() {
    const r = await fetch("https://api.quotable.io/random");
    const data = await r.json();
    // print the data to browser console
    // console.log(data.content);
    setQuote(data.content);
    setAuthor(data.author);
  }

  // run initially
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      {!display && (
        <header className="App-header">
          <div className="intro">
            <div className="quotation">“</div>
            <div className="app-title">Quote Creator</div>
            <div className="app-description">
              Create a famous quote for inspiration
              <br />
              with a single click.
            </div>
            <div className="button-wrap">
              <Button type="primary" size="large" onClick={setDisplay}>
                Create Quote
              </Button>
            </div>
          </div>
        </header>
      )}
      {display && <Quote quote={quote} author={author} getQuote={getQuote} />}
    </div>
  );
}

// create new component
function Quote(props) {
  return (
    <div className="card-wrap">
      <Card title="Famous Quote">
        <div className="card-body">
          <div className="inspirational-quote">{props.quote}</div>
          <div className="quote-author">⁠— {props.author}</div>
        </div>
        <Button type="primary" size="large" onClick={props.getQuote}>
          Create New Quote
        </Button>
      </Card>
    </div>
  );
}

export default App;
