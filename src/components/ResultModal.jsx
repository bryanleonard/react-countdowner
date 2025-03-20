
// React 19+ solution
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
import { forwardRef } from 'react';
const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
	
	return (
		<dialog ref={ref}className="result-modal">
			<h2>You {result}!</h2>
			<p>The target time was <strong> {targetTime} seconds.</strong></p>
			<p>You stopped the timer with <strong>x seconds remaining.</strong></p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	)
});

export default ResultModal;