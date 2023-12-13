import React from "react";
import Timer from "./Timer";
import Answers from "./Answers";

const Question = ({ questionText, answers, handleAnswerSelect, selectedAnswer, answerState, handleSkip }) => {
	return (
		<div id="question">
			<Timer timeOut={20000} onTimeout={handleSkip} />
			<h2>{questionText}</h2>
			<Answers answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSelect={handleAnswerSelect} />
		</div>
	);
};

export default Question;
