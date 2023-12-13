import React, { useCallback, useState } from "react";
import questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

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
		return <Summary userAnswers={answers} />;
	}

	return (
		<div id="quiz">
			<Question key={activeQuestionIdx} keyBis={activeQuestionIdx} handleAnswerSelect={handleAnswerSelect} handleSkip={handleSkip} />
		</div>
	);
};

export default Quiz;
