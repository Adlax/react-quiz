import React, { useEffect, useState } from "react";

const Timer = ({ timeOut = 30000, onTimeout, mode }) => {
	const [remainingTime, setRemainingTime] = useState(timeOut);

	useEffect(() => {
		// console.log("timeout block");
		const pid = setTimeout(() => {
			onTimeout();
		}, timeOut);
		return () => {
			clearTimeout(pid);
		};
	}, [timeOut, onTimeout]);

	useEffect(() => {
		// console.log("interval block");
		const pid = setInterval(() => {
			setRemainingTime((oldState) => oldState - 100);
		}, 100);
		return () => {
			clearInterval(pid);
		};
	}, []);

	return <progress id="question-time" value={remainingTime} max={timeOut} className={mode} />;
};

export default Timer;
