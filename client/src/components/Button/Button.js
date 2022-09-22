import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ label, className = '', onClick = null }) => (
	<button className={`${styles.button} ${className}`} onClick={onClick}>
		{label}
	</button>
);

Button.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
