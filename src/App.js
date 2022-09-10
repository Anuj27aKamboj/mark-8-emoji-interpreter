import React, { useState } from "react";
import "./App.css";

var color = "#f472b6";

var emojiDictionary = {
  "🧗": "Climbing",
  "🤺": "Fencing",
  "🤼": "Wrestling",
  "⛷️": "Skiing",
  "🏂": "Snowboarder",
  "🏌️": "Golfing",
  "🏄": "Surfing"
};

const emojiList = {
  "🧗": "Climbing",
  "🤺": "Fencing",
  "🤼": "Wrestling",
  "⛷️": "Skiing",
  "🏂": "Snowboarder",
  "🏌️": "Golfing",
  "🏄": "Surfing",
  "Wrestling": "🤼"
}

var emojiKnown = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiList[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We do not have this emoji in our library";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Activity Dictionary</h1>
      <input onChange={emojiInputHandler} placeholder="🔍 Enter your emoji here"/>
      <h2>{meaning}</h2>

      <h3>Emoji we Know : </h3>
      {emojiKnown.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
