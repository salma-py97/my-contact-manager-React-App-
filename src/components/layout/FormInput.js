import PropTypes from "prop-types";

const FormInput = ({ label, type, value, placeholder, onChange }) => {
	return (
		<div className="mb-3">
			<label className="form-label">{label}</label>

			<input
				type={type}
				placeholder={placeholder}
				className="form-control"
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default FormInput;
