import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = React.forwardRef(
	({ label, className = '', value = '', onClick = null }, ref) => (
		<button
			className={`${styles.button} ${className}`}
			value={value || label}
			ref={ref}
			onClick={onClick}
		>
			{label}
		</button>
	)
);

Button.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
