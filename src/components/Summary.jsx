import React from "react";
import completed from "../assets/quiz-complete.png";
import questions from "../questions";

const Summary = ({ userAnswers }) => {
	console.log(userAnswers);
	const skippedAnswers = userAnswers.filter((answer) => answer === null);
	const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0]);
	// const wrongAnswers = userAnswers.filter((answer, index) => answer !== questions[index].answers[0]);

	const skippedShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
	const correctShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
	const wrongShare = 100 - correctShare - skippedShare;

	return (
		<div id="summary">
			<img src={completed} alt="final" />
			<h2>Quiz Completed</h2>
			<div id="summary-stats">
				<p>
					<span className="number">{skippedShare}%</span>
					<span className="text">skipped</span>
				</p>
				<p>
					<span className="number">{correctShare}%</span>
					<span className="text">correct</span>
				</p>
				<p>
					<span className="number">{wrongShare}%</span>
					<span className="text">wrong</span>
				</p>
			</div>
			<ol>
				{questions.map((question, index) => {
					let cssClasses = "user-answer";
					if (userAnswers[index] === null) {
						cssClasses += " skipped";
					} else if (userAnswers[index] === question.answers[0]) {
						cssClasses += " correct";
					} else {
						cssClasses += " wrong";
					}
					return (
						<li key={index}>
							<h3>#{index + 1}</h3>
							<p className="question">{question.text}</p>
							<p className="question">Correct Answer : {question.answers[0]}</p>
							<p className={cssClasses}>Your Answer : {userAnswers[index] ?? "Skipped"}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Summary;
