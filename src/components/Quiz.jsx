import React, { useCallback, useState } from "react";
import questions from "../questions";
import completed from "../assets/quiz-complete.png";
import Question from "./Question";

const Quiz = () => {
	const [answers, setUserAnswers] = useState([]);

	const activeQuestionIdx = answers.length;
	const quizComplete = activeQuestionIdx === questions.length;

	const handleAnswerSelect = useCallback(function handleAnswerSelect(answer) {
		setUserAnswers((oldState) => {
			return [...oldState, answer];
		});
	}, []);

	const handleSkip = useCallback(() => handleAnswerSelect(null), [handleAnswerSelect]);

	if (quizComplete) {
		return (
			<div id="summary">
				<img src={completed} alt="final" />
				<h2>Quiz Completed</h2>
			</div>
		);
	}

	return (
		<div id="quiz">
			<Question key={activeQuestionIdx} keyBis={activeQuestionIdx} handleAnswerSelect={handleAnswerSelect} handleSkip={handleSkip} />
		</div>
	);
};

export default Quiz;
