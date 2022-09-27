import { FaGithub } from 'react-icons/fa';

import { LINKS } from 'constants';

// import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';
import Link from 'components/Link/Link';
import styles from './Navbar.module.scss';

// const BUTTONS = [
// 	{ label: 'Reset' },
// 	{ label: 'Scores' } // TODO - add react-router and logic for saving scores to local storage
// ];

const Navbar = () => {
	// TODO - add onClick for Reset button to reset the gameboard state
	// will need context or redux for this

	// const handleReset = () => {};
	// const handleViewScores = () => console.log('View Scores');

	return (
		<nav className={styles.container}>
			{/* {BUTTONS.map(({ label }) => (
				<Button key={label} label={label} />
			))} */}
			<Link url={LINKS.github}>
				<Icon name={FaGithub} />
			</Link>
		</nav>
	);
};

export default Navbar;
