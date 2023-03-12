import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function onAddNewGuess(text) {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), label: text }];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addNewGuess={onAddNewGuess} />
    </>
  );
}

export default Game;
