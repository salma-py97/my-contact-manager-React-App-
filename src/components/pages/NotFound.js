import img from './NotFound.png'

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="display-5 mb-5">404 Page Not Found</h1>
            <img src={img} alt="..." style={{display:'block', margin: "auto"}} />
            <p className="lead mt-5">Sorry, that page does not exist</p>

      </div>
    )
}

export default NotFound
