import Header from '../../components/Header/Header';
import GameBoard from '../../components/GameBoard/GameBoard';
import Controls from '../../components/Controls/Controls';

import { useGameContext } from '../../state/gameContext';
import { IGameState } from '../../types';

import styles from './Home.module.scss';

function Home() {
	const gameContext = useGameContext();
	const { isGameActive }: IGameState = gameContext![0];

	return (
		<main className={styles.container}>
			<Header />
			{!isGameActive ? <Controls /> : <GameBoard />}
		</main>
	);
}

export default Home;
