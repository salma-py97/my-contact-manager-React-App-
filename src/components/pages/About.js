import {Link} from 'react-router-dom'


const About = () => {
    return (
        <div>
            <h2 className="display-3">About This app</h2>
            <p className="lead">Simple App to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
            <Link className="btn btn-secondary mt-5" to="/">Back to Home</Link>
            <br />
            <small style={{position: "fixed", bottom: "10px", left: "45%"}} >Copyright &copy; 2021</small>
        </div>
    )
}

export default About
