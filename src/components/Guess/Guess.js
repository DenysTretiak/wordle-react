import React from 'react';
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({guess}) {
  const getGuessLetter = (num) =>  guess ? guess[num] : undefined;
  return (
      <p className="guess">
        {
          range(5).map((num) => (
              <span key={num} className={`cell ${getGuessLetter(num)?.status}`}>
                  {getGuessLetter(num)?.letter}
              </span>
          ))
        }
      </p>
  );
}

export default Guess;
