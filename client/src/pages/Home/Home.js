import React from 'react';
import styles from './Home.module.css';

import GameBoard from '../../components/GameBoard/GameBoard';

function Home() {
	return (
		<main className={styles.container}>
			<h1>Match Game</h1>
			<GameBoard />
		</main>
	);
}

export default Home;
