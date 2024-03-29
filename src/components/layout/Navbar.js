import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'


const Navbar = ({ title, icon, onToggle, showAdd }) => {
	return (
		<nav className="mb-5">
			<div className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1 d-flex justify-content between align-items-center flex-md-row flex-column">
				<Link to="/" className="navbar-brand fs-3 ms-md-5">
					<i className={icon}></i> {title}
				</Link>

				<ul className="navbar-nav ms-md-auto me-md-5  text-center d-flex flex-row">
					<li className="nav-item mx-3">
						<Link to="/" className="nav-link fs-6 text-white">
							Home
						</Link>
					</li>
					<li className="nav-item mx-3">
						<Link to="/about" className="nav-link fs-6 text-white">
							About
						</Link>
					</li>
					<li className="nav-item mx-3">
						<Link to="#" className="nav-link fs-6 text-white" onClick = {onToggle}>
							{showAdd ? "Close form" : "Add Contact"}
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	onToggle: PropTypes.func,
	showAdd: PropTypes.func
}


export default Navbar;
