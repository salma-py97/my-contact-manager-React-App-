
const Navbar = ({ title, icon, onToggle, showAdd }) => {
	return (
		<nav className="mb-5">
			<div className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1 d-flex justify-content between align-items-center flex-md-row flex-column">
				<a href="/" className="navbar-brand fs-3 ms-md-5">
					<i className={icon}></i> {title}
				</a>

				<ul className="navbar-nav ms-md-auto me-md-5  text-center d-flex flex-row">
					<li className="nav-item mx-3">
						<a href="/" className="nav-link fs-6 text-white">
							Home
						</a>
					</li>
					<li className="nav-item mx-3">
						<a href="/about" className="nav-link fs-6 text-white">
							About
						</a>
					</li>
					<li className="nav-item mx-3">
						<a href="#" className="nav-link fs-6 text-white" onClick = {onToggle}>
							{showAdd ? "Close form" : "Add Contact"}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
