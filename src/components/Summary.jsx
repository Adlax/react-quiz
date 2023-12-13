import React from "react";
import completed from "../assets/quiz-complete.png";
import questions from "../questions";

const Summary = ({ userAnswers }) => {
	return (
		<div id="summary">
			<img src={completed} alt="final" />
			<h2>Quiz Completed</h2>
			<div id="summary-stats">
				<p>
					<span className="number">10%</span>
					<span className="text">skipped</span>
				</p>
				<p>
					<span className="number">20%</span>
					<span className="text">correct</span>
				</p>
				<p>
					<span className="number">70%</span>
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
