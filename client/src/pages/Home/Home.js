import React from 'react';
import { Outlet } from 'react-router-dom';

import GameBoard from '../../components/GameBoard/GameBoard';

import styles from './Home.module.css';

function Home() {
	return (
		<main className={styles.container}>
			<GameBoard />
			<Outlet />
		</main>
	);
}

export default Home;
