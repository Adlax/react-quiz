import React, { useCallback, useState } from "react";
import questions from "../questions";
import completed from "../assets/quiz-complete.png";
import Question from "./Question";

const Quiz = () => {
	const [answerState, setAnswerState] = useState("");
	const [answers, setUserAnswers] = useState([]);
	const activeQuestionIdx = answerState === "" ? answers.length : answers.length - 1;

	const quizComplete = activeQuestionIdx === questions.length;

	const handleAnswerSelect = useCallback(
		function handleAnswerSelect(answer) {
			setAnswerState("answered");
			setUserAnswers((oldState) => {
				return [...oldState, answer];
			});
			setTimeout(() => {
				if (answer === questions[activeQuestionIdx].answers[0]) {
					setAnswerState("correct");
				} else {
					setAnswerState("wrong");
				}
				setTimeout(() => {
					setAnswerState("");
				}, 2000);
			}, 1000);
		},
		[activeQuestionIdx]
	);

	// const  handleAnswerSelect = (answer) => {
	// 	setUserAnswers((oldState) => {
	// 		return [...oldState, answer];
	// 	});
	// };

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
			<Question
				key={activeQuestionIdx}
				questionText={questions[activeQuestionIdx].text}
				answers={questions[activeQuestionIdx].answers}
				handleAnswerSelect={handleAnswerSelect}
				selectedAnswer={answers[answers.length - 1]}
				answerState={answerState}
				handleSkip={handleSkip}
				activeQuestionIdx={activeQuestionIdx}
			/>
		</div>
	);
};

export default Quiz;
