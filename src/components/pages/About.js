import {Link} from 'react-router-dom'


const About = () => {
    return (
        <div>
            <h2>About This app</h2>
            <h3>Version 1.0.0</h3>
            <small>Copyright &copy; 2021</small>

            <Link className="btn btn-secondary" to="/">Back to Home</Link>
        </div>
    )
}

export default About
