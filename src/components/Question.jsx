import React, { useState } from "react";
import Timer from "./Timer";
import Answers from "./Answers";
import questions from "../questions";

const Question = ({ keyBis: key, handleAnswerSelect, handleSkip }) => {
	const [answer, setAnswer] = useState({
		selectedAnswer: "",
		isCorrect: null,
	});

	const selectAnswer = (answer) => {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null,
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer: answer,
				isCorrect: questions[key].answers[0] === answer,
			});
			setTimeout(() => {
				handleAnswerSelect(answer);
			}, 2000);
		}, 1000);
	};

	let answerState = "";
	if (answer.selectedAnswer) {
		answerState = answer.isCorrect ? "correct" : "wrong";
	}

	return (
		<div id="question">
			<Timer timeOut={20000} onTimeout={handleSkip} />
			<h2>{questions[key].text}</h2>
			<Answers answers={questions[key].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={selectAnswer} />
		</div>
	);
};

export default Question;
