import React from 'react';

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import { GameProvider } from './state/gameContext';

import styles from './App.module.scss';

function App() {
	return (
		<GameProvider>
			<div className={styles.app}>
				<Home />
				<Footer />
			</div>
		</GameProvider>
	);
}

export default App;
