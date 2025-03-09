import React from 'react';

export default function ResultModal({ref, result, targetTime }) {
    return (
        <dialog  className="result-modal" ref={ref}>
            <div className="modal-content">
                <h2>You {result}</h2>
                <p>The target time was <strong>{targetTime} seconds.</strong></p>
                <p>
                    You stopped the timer at <strong>X seconds left</strong>.
                </p>
            </div>
            <form method="dialog">
            <button>Close</button>
            </form>
        </dialog>
    );
};
