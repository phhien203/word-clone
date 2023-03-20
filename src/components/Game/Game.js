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

  function onAddNewGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addNewGuess={onAddNewGuess} />
    </>
  );
}

export default Game;
