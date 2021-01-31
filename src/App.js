import React, { useState } from 'react';
import questions from './questions';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleAnswerButtonClick = () => {
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert('you reached the end of the quiz');
		}
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answer) => {
								return <button onClick={handleAnswerButtonClick}>{answer.answerText}</button>
							})}
						</div>
					</>
				)}
		</div>
	);
}
