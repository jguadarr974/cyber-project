import '../home.css'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div>
            <div className='reveal'>
                <h1 className="title">Welcome to CyberSecurity Awareness Trivia Game<br/></h1>
                <div className='button-wrapper'>
                <button className='wrapper-text'><Link to='/questions'>Start</Link></button>
                <button className='wrapper-text'><Link to='/instructions'>How it Works</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Home  