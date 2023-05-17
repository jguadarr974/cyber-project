import { Link } from 'react-router-dom'
import "../instructions.css"

const Instructions = () => {
    return (
      <div >
        <h1 className='i-title'>Welcome to the Cybersecurity Trivia game! <br/><br/></h1>
        <div className='group'>
        <h2>Objective</h2>
        <p>
          The objective of the game is to correctly answer as many 
          cybersecurity-related questions as possible. You will have two 
          attempts to answer each question.
        </p>

        <p>
        If you do not answer the question correctly within three attempts, 
        the game will display the correct answer and move on to the next question. 
        You will not receive any points for incorrect answers.
        If you answer a question correctly within the three attempts, 
        you will receive points
        <br/>
        Once you have answered all the questions, the game will display the “Ending” screen, 
        which will show your final score and how many questions you answered correctly. 
        The more correct answers you get, the higher your score will be.
        </p>

        <p>
        Make sure to think carefully and use your knowledge of cybersecurity to answer each 
        question to the best of your ability.
        </p>

        <p>
        Are you ready to test your cybersecurity knowledge? Let's play!
        </p>
        <button className='start-game'><Link to='/questions'>Start Game</Link></button>
        </div>

      </div>
    )
  }
  
  export default Instructions;