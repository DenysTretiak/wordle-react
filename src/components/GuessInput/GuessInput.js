import React from 'react';

function GuessInput({setGuessResults, isDisabled}) {
  const [guessValue, setGuessValue] = React.useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setGuessResults(guessValue);
    setGuessValue('');
  }
  return (
      <form onSubmit={onSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            value={guessValue}
            disabled={isDisabled}
            onChange={e => setGuessValue(e.target.value.toUpperCase())}
            id="guess-input"
            type="text"
            pattern=".{5}"
            title="5 letter world"
        />
      </form>
  )
}

export default GuessInput;
