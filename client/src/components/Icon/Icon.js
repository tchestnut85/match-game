import PropTypes from 'prop-types';

const Icon = ({
	name,
	color = '#00ffff',
	className = '',
	size = 30,
	children = null,
}) => {
	const IconComponent = name;

	return (
		<IconComponent color={color} size={size} className={className}>
			{children}
		</IconComponent>
	);
};

Icon.propTypes = {
	name: PropTypes.func.isRequired,
	color: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	size: PropTypes.number,
};

export default Icon;
