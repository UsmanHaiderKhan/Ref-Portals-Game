import {forwardRef,useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }));
    return (
        <dialog  ref={dialog} className="result-modal">
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
});
export default ResultModal;
