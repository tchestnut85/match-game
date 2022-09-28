import { FaGithub } from 'react-icons/fa';

import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Link from 'components/Link/Link';

import { useGameContext } from 'state/gameContext';
import { ACTION_TYPES } from 'state/gameReducer';
import { LINKS } from 'constants';

import styles from './Navbar.module.scss';

// TODO - add react-router and logic for saving scores to local storage

const Navbar = () => {
	const [{ isGameActive }, dispatch] = useGameContext();

	const BUTTONS = [
		{ label: 'Reset', isDisabled: !isGameActive },
		// 	{ label: 'Scores' }
	];

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
			<Link url={LINKS.github}>
				<Icon icon={FaGithub} />
			</Link>
		</nav>
	);
};

export default Navbar;
