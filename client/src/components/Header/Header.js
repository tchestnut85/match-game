import React from 'react';
import { useLocation } from 'react-router-dom';

import Link from '../Link/Link';

import { APP_TITLE } from '../../constants';

import styles from './Header.module.css';

const LINKS = [
	{ id: '/', label: 'Game' },
	{ id: '/scores', label: 'Scores' },
];

const Header = () => {
	const location = useLocation();

	return (
		<nav className={styles.container}>
			<Link path="/">
				<h1>{APP_TITLE}</h1>
			</Link>
			<ul className={styles.links}>
				{LINKS.map(({ id, label }) => (
					<Link
						key={id}
						path={id}
						label={label}
						className={id === location.pathname ? styles.isActive : null}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Header;
