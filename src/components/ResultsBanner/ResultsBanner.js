import React from 'react';

function ResultsBanner({status, answer, attempts}) {

    if (status === 'won') {
        return (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong>
                            {attempts === 1 ? ' 1 guess' : ` ${attempts} guesses`}
                        </strong>
                    </p>
                </div>
        )
    } else if (status === 'lose') {
        return (
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
        )
    }
}

export default ResultsBanner;
