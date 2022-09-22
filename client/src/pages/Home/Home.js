import Header from 'components/Header/Header';
import GameBoard from 'components/GameBoard/GameBoard';
import styles from './Home.module.scss';

function Home() {
	return (
		<main className={styles.container}>
			<Header />
			<GameBoard />
		</main>
	);
}

export default Home;
