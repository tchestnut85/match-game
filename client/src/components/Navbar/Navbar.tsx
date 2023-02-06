import Button from '../Button/Button';

import { useGameContext } from '../../state/gameContext';
import { ACTION_TYPES } from '../../constants';

import styles from './Navbar.module.scss';

// TODO - add react-router and logic for saving scores to local storage

const Navbar = () => {
	const gameContext = useGameContext();
	const [{ isGameActive }, dispatch] = gameContext!;

	const BUTTONS = [{ label: 'Reset', isDisabled: !isGameActive }];

	const handleReset = () => dispatch({ type: ACTION_TYPES.RESET });

	return (
		<nav className={styles.container}>
			{BUTTONS.map(({ label, isDisabled }) => (
				<Button
					key={label}
					label={label}
					disabled={isDisabled}
					onClick={handleReset}
				/>
			))}
		</nav>
	);
};

export default Navbar;
