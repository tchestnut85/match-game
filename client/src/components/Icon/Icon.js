import PropTypes from 'prop-types';

const Icon = ({
	icon,
	color = '#00ffff',
	className = '',
	size = 30,
	children = null,
	id = null,
}) => {
	const IconComponent = icon;

	return (
		<IconComponent color={color} size={size} className={className} id={id}>
			{children}
		</IconComponent>
	);
};

Icon.propTypes = {
	icon: PropTypes.func.isRequired,
	color: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	size: PropTypes.number,
	id: PropTypes.string,
};

export default Icon;
