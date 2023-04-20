import React, {useState} from 'react';
import '../question.css';

function Question (){
  const questions =[
    {
      questionText: 'What do you call a malicious software that attempts to infiltrate a system disguised as something different?',
      answerOptions:[
        { answerText: 'Trojan', isCorrect: true},
        { answerText: 'Worm', isCorrect: false},
        { answerText: 'Ransomware', isCorrect: false},
        { answerText: 'Keylogger', isCorrect: false},
      ],
    },
    {
      questionText: "What is the process of validating a user's identity or device?",
      answerOptions:[
        { answerText: 'Authentication', isCorrect: true},
        { answerText: 'Updates', isCorrect: false},
        { answerText: 'Secure Passwords', isCorrect: false},
        { answerText: 'Auto logout', isCorrect: false},
      ],
    },
  ]; 

  const handleAnswerButtonClick = (isCorrect) =>{
    if(isCorrect===true){
      alert("this answer is correct!");
      setScore(score + 1 );
      const nextQuestion = currentQuestion+1;
      if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
      }else{
        setShowScore(true);
      }
    }
    
    else{
      alert("wrong, please try again")
      const nextQuestion = currentQuestion+1;
      if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion);
      }else{
        setShowScore(true);
      }
    }
  }

  const [currentQuestion, setCurrentQuestion ] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  return(
    <div className='main'>
      {/* Hint: replace "false" with logic to display the 
      score when the user has answered all the questions*/}

      <div className='quiz-game'>
      {showScore ? (
        <div className='score-section'>You Scored {score} out of {questions.length}</div>
      ):(
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOptions)=>
              <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
            )}
          </div>
        </>
      )}
      </div>
    </div>
  )
}

export default Question; 