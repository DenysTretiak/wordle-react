import React from 'react';

import {range, sample} from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";
import ResultsBanner from "../ResultsBanner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
// import checkGuess from '../CheckGuess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [status, setStatus] = React.useState('running');
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [attempts, setAttempts] = React.useState(0);
    const setGuessResults = (guessTitle) => {
        const newGuess = checkGuess(guessTitle, answer);
        const isCorrectWord = newGuess?.every(word => word.status === 'correct');
        if (isCorrectWord) {
            setStatus('won');
            setIsDisabled(true);
            setAttempts(guesses.length + 1);
        }

        if (!isCorrectWord && guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
            setStatus('lose');
            setIsDisabled(true);
        }

        setGuesses([...guesses, newGuess]);
    }

  return (
      <>
        <GuessResults guesses={guesses} setStatus={setStatus}></GuessResults>
        <GuessInput setGuessResults={setGuessResults} isDisabled={isDisabled}></GuessInput>
        {status !== 'running' && <ResultsBanner attempts={attempts} status={status} answer={answer} />}
      </>
  )
}

export default Game;
