import React from "react";

function GuessInput({ gameStatus, addNewGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTentativeGuess("");
    console.log({ guess: tentativeGuess });
    addNewGuess(tentativeGuess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        id="guess-input"
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={tentativeGuess}
        title="5 character word"
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
