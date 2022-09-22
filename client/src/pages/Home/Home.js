import React from 'react';
import styles from './Home.module.css';

import GameBoard from 'components/GameBoard/GameBoard';

import { APP_NAME } from 'constants';

function Home() {
	return (
		<main className={styles.container}>
			<h1>{APP_NAME}</h1>
			<GameBoard />
		</main>
	);
}

export default Home;
