import { Link as RouterLink } from 'react-router-dom';

import Button from '../Button/Button';

type NavbarButtonProps = {
	button: {
		label: string;
		isDisabled: boolean;
		route?: string;
		onClick?: () => void;
	};
	isRoute: boolean;
};

const NavbarButton = ({ button, isRoute }: NavbarButtonProps) => {
	const { label, isDisabled, onClick, route } = button;
	return isRoute ? (
		<RouterLink to={route!}>
			<Button key={label} label={label} disabled={isDisabled} />
		</RouterLink>
	) : (
		<Button key={label} label={label} disabled={isDisabled} onClick={onClick} />
	);
};

export default NavbarButton;
