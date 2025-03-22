
// React 19+ solution using refs.
// export default function ResultModal({ref, result, targetTime}) {
	
// 	return (
// 		<dialog ref={ref}className="result-modal">
// 			<h2>Your {result}</h2>
// 			<p>The target time was <strong> {targetTime} seconds.</strong></p>
// 			<p>You stopped the timer with <strong>x seconds remaining.</strong></p>
// 			<form method="dialog">
// 				<button>Close</button>
// 			</form>
// 		</dialog>
// 	)
// }

// React <19 solution
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime, remainingTime, onReset}, ref) {
	const dialog = useRef();

	const userLost = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			}
		};
	});

	return (
		<dialog ref={dialog} className="result-modal">
			<h2>You {userLost ? 'lost' : 'won'}!</h2>
			<p>The target time was <strong> {targetTime} second{targetTime > 1 ? 's' : ''}.</strong></p>
			<p>You stopped the timer with <strong>{formattedRemainingTime} seconds remaining.</strong></p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>
	)
});

export default ResultModal;