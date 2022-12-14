import React, { useState } from "react";
import "./App.css";

var color = "#f472b6";

var emojiDictionary = {
  "๐ง": "Climbing",
  "๐คบ": "Fencing",
  "๐คผ": "Wrestling",
  "โท๏ธ": "Skiing",
  "๐": "Snowboarding",
  "๐๏ธ": "Golfing",
  "๐": "Surfing",
  "๐ด": "Cycling",
  "๐": "Swimming",
  "๐คน": "Juggling",
  "๐": "Running",
  "๐ฃ": "Boating"
};

const emojiList = {
  "๐ง": "Climbing",
  "๐คบ": "Fencing",
  "๐คผ": "Wrestling",
  "โท๏ธ": "Skiing",
  "๐": "Snowboarding",
  "๐๏ธ": "Golfing",
  "๐": "Surfing",
  "๐ด": "Cycling",
  "๐": "Swimming",
  "๐คน": "Juggling",
  "๐": "Running",
  "๐ฃ": "Boating",

  "Climbing":"๐ง" ,
  "Fencing" :"๐คบ" ,
  "Wrestling":"๐คผ" ,
  "Skiing" :"โท๏ธ" ,
  "Snowboarding":"๐",
  "Golfing":"๐๏ธ" ,
  "Surfing":"๐" ,
  "Cycling":"๐ด" ,
  "Swimming":"๐" ,
  "Juggling":"๐คน" ,
  "Running":"๐" ,
  "Boating":"๐ฃ" 
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
      <input onChange={emojiInputHandler} placeholder="๐ Enter your emoji here"/>
      <h2 style={{color : "#65a30d"}}>{meaning}</h2>

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
