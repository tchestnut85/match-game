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
		<div className={className}>
			<IconComponent color={color} size={size}>
				{children}
			</IconComponent>
		</div>
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
