import { FaGithub } from 'react-icons/fa';

import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Link from 'components/Link/Link';

import { useGameContext } from 'state/gameContext';
import { ACTION_TYPES } from 'state/gameReducer';
import { LINKS } from 'constants';

import styles from './Navbar.module.scss';

const BUTTONS = [
	{ label: 'Reset' },
	// 	{ label: 'Scores' }
];

// TODO - add react-router and logic for saving scores to local storage

const Navbar = () => {
	const [, dispatch] = useGameContext();

	const handleReset = () => dispatch({ type: ACTION_TYPES.RESET });

	return (
		<nav className={styles.container}>
			{BUTTONS.map(({ label }) => (
				<Button key={label} label={label} onClick={handleReset} />
			))}
			<Link url={LINKS.github}>
				<Icon name={FaGithub} />
			</Link>
		</nav>
	);
};

export default Navbar;
