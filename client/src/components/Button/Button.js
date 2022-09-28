import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = React.forwardRef(
	(
		{
			label,
			className = '',
			value = '',
			onClick = null,
			type = 'button',
			disabled = false,
		},
		ref
	) => (
		<button
			className={`${styles.button} ${
				disabled ? styles.disabled : ''
			} ${className}`}
			value={value || label}
			ref={ref}
			onClick={onClick}
			type={type}
			disabled={disabled}
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
	type: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Button;
