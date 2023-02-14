import NavbarButton from './NavbarButton';

import { useGameContext } from '../../state/gameContext';
import { ACTION_TYPES, NAV_BUTTONS } from '../../constants';

import styles from './Navbar.module.scss';

const { RESET } = NAV_BUTTONS;

const BUTTONS = Object.keys(NAV_BUTTONS);

const Navbar = () => {
	const gameContext = useGameContext();
	const [{ isGameActive }, dispatch] = gameContext!;

	const handleReset = () => dispatch({ type: ACTION_TYPES.RESET });

	const buttonsConfig = BUTTONS.map(buttonName => {
		const { label, route } = NAV_BUTTONS[buttonName];
		const isResetButton = label === RESET.label;
		return {
			label,
			route,
			isDisabled: isResetButton ? !isGameActive : false,
			onClick: isResetButton ? handleReset : undefined,
		};
	});

	return (
		<nav className={styles.container}>
			{buttonsConfig.map(button => (
				<NavbarButton
					key={button.label}
					button={button}
					isRoute={!!button.route}
				/>
			))}
		</nav>
	);
};

export default Navbar;
