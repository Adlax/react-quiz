import React, { useCallback, useState } from "react";
import questions from "../questions";
import completed from "../assets/quiz-complete.png";
import Timer from "./Timer";

const Quiz = () => {
	const [answers, setUserAnswers] = useState([]);
	const activeQuestionIdx = answers.length;

	const quizComplete = activeQuestionIdx === questions.length;

	const handleAnswerSelect = useCallback(function handleAnswerSelect(answer) {
		setUserAnswers((oldState) => {
			return [...oldState, answer];
		});
	}, []);

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

	// keep this here (because when quiz is finished it may break the app)
	const shuffledAnswers = [...questions[activeQuestionIdx].answers];
	shuffledAnswers.sort((a, b) => Math.random() - 0.5);

	return (
		<div id="quiz">
			<div id="questions">
				<Timer timeOut={5000} onTimeout={handleSkip} key={activeQuestionIdx} />
				<h2>{questions[activeQuestionIdx].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => (
						<li key={answer} className="answer">
							<button onClick={() => handleAnswerSelect(answer)}>{answer}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Quiz;
