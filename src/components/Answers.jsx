import React, { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
	const shuffledAnswers = useRef();

	// keep this here (because when quiz is finished it may break the app)
	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
	}

	return (
		<ul id="answers">
			{shuffledAnswers.current.map((answer) => {
				const isSelected = answer === selectedAnswer;
				let cssClasses = "";
				if (answerState === "answered" && isSelected) {
					cssClasses = "selected";
				}
				if (isSelected && (answerState === "correct" || answerState === "wrong")) {
					cssClasses = answerState;
				}
				return (
					<li key={answer} className="answer">
						<button onClick={() => onSelect(answer)} className={cssClasses}>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Answers;
