import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { GameProvider } from './state/gameContext';

import styles from './App.module.scss';

function App() {
	return (
		<GameProvider>
			<div className={styles.app}>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</GameProvider>
	);
}

export default App;
