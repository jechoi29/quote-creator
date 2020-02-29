import React, { useState, useEffect } from "react";
import "./App.css";
import "./media.css";
import { Button, Card } from "antd";
import "antd/dist/antd.css";

function App() {
  const [quote, setQuote] = useState("Famous Quote"); // quote into a string
  const [author, setAuthor] = useState("Author of Quote");
  const [rand, setRand] = useState(0);
  const [display, setDisplay] = useState(false);

  async function getQuote() {
    const r = await fetch("https://type.fit/api/quotes");
    const data = await r.json();
    var rand = Math.floor(Math.random() * 100);
    // print the json data to browser console
    // test for debugging purposes
    // console.log(data);
    // console.log(data[rand].text);
    console.log(rand); // generate a random number 0-99
    setQuote(data[rand].text);
    if (data[rand].author === null) {
      setAuthor("Unknown");
    } else {
      setAuthor(data[rand].author);
      setRand("Quote #" + rand);
    }
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
              Create an inspirational quote
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
      {display && (
        <Quote quote={quote} author={author} getQuote={getQuote} rand={rand} />
      )}
    </div>
  );
}

// create new component
function Quote(props) {
  return (
    <div className="card-wrap">
      <Card title={props.rand}>
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
