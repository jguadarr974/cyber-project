import "../resources.css"
import { Link } from 'react-router-dom'


const Instructions = () => {
    return (
        <div>
            <h2>Cyber Security Resources</h2>
            <div className="links">
            <a 
            href="https://www.cisa.gov/topics/cybersecurity-best-practices#:~:text=Using%20strong%20passwords%2C%20updating%20your,to%20both%20individuals%20and%20organizations"
            target="_blank"
            className="link"
            >
                Cybersecurity Best Practices
            </a>
            <a href="https://cipher.com/blog/10-personal-cyber-security-tips-cyberaware/" target="_blank" className="link">
                Cybersecurity Awareness Tips
            </a>
            <a href="https://www.morganstanley.com/articles/personal-cybersecurity" target="_blank" className="link">
                Best Cybersecurity Habits
            </a>
            <a 
            href="https://security.berkeley.edu/resources/best-practices-how-to-articles/top-10-secure-computing-tips"
            target="_blank"
            className="link"
            >
                Top 10 Secure Computing Tips
            </a>
            < a href="https://intellipaat.com/blog/cyber-security-tips-best-practices/?US" target="_blank" className="link">
                Cyber Security Tips and Practices
            </a>
            </div>

            <button className="button-1"><Link to="/">Go Back</Link></button>
        </div>
    )
}

export default Instructions;