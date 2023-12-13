import React, { useState } from "react";
import Timer from "./Timer";
import Answers from "./Answers";
import questions from "../questions";

const Question = ({ keyBis: key, handleAnswerSelect, handleSkip }) => {
	const [answer, setAnswer] = useState({
		selectedAnswer: "",
		isCorrect: null,
	});

	let timer = 10000;
	if (answer.selectedAnswer) {
		timer = 1000;
	}
	if (answer.isCorrect !== null) {
		timer = 2000;
	}

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
	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? "correct" : "wrong";
	} else if (answer.selectedAnswer) {
		answerState = "answered";
	}

	return (
		<div id="question">
			<Timer timeOut={timer} onTimeout={answer.selectedAnswer === "" ? handleSkip : null} mode={answerState} key={timer} />
			<h2>{questions[key].text}</h2>
			<Answers answers={questions[key].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={selectAnswer} />
		</div>
	);
};

export default Question;
