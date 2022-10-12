import React from 'react';

interface IIconBaseProps {
	color: string;
	className?: string;
	size?: number;
	children?: React.FC | null;
	id?: string | null;
}

interface IIconProps extends IIconBaseProps {
	icon: React.FC;
}

interface IIconComponent extends IIconBaseProps {}

// interface IIconComponent extends IIconBaseProps {
// 	color: string;
// 	className?: string;
// 	size?: number;
// 	children?: React.FC | null;
// 	id?: string | null;
// }

const Icon = ({
	icon,
	color = '#00ffff',
	className = '',
	size = 30,
	children = null,
	id = null,
}: IIconProps) => {
	const IconComponent: React.FC<IIconComponent> | undefined = icon;

	return (
		<IconComponent
			color={color}
			size={size}
			className={className}
			id={id}
			children={children}
		/>
	);
};

export default Icon;
