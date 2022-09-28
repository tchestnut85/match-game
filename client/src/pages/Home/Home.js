import Header from 'components/Header/Header';
import GameBoard from 'components/GameBoard/GameBoard';
import Controls from 'components/Controls/Controls';
import Footer from 'components/Footer/Footer';

import { useGameContext } from '../../state/gameContext';

import styles from './Home.module.scss';

function Home() {
	const [
		{ images, selectedTiles, matchedIds, isGameActive, isGameComplete },
		dispatch,
	] = useGameContext();

	return (
		<main className={styles.container}>
			<Header />
			{!isGameActive && <Controls />}
			{isGameActive && <GameBoard />}
			<Footer />
		</main>
	);
}

export default Home;
