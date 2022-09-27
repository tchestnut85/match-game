import PropTypes from 'prop-types';

import styles from './Link.module.scss';

const Link = ({ url, children, className = '' }) => (
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		className={`${styles.container} ${className}`}
	>
		{children}
	</a>
);

Link.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Link;
