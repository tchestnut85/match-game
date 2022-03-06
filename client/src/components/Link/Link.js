import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ children = null, path, label = '', className = '' }) => {
	return (
		<RouterLink to={path} className={className}>
			{children || <li>{label}</li>}
		</RouterLink>
	);
};

Link.propTypes = {
	children: PropTypes.element,
	path: PropTypes.string.isRequired,
	label: PropTypes.string,
	className: PropTypes.string,
};

export default Link;
