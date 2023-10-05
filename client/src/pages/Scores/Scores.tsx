import ScoresRow from './ScoresRow';

import { SCORES_HEADINGS } from '../../constants';
import LocalStorage from '../../utils/localStorage';

import styles from './Scores.module.scss';

const localStorage = LocalStorage.getInstance();

const Scores = () => {
	const savedScores = localStorage.getScores();

	const scoresData = savedScores.map(({ name, scores }) => {
		return {
			name,
			scores: scores.map(score => score.toString()).join(', '),
			total: scores.reduce((total, score) => total + score, 0),
		};
	});

	return (
		<main className={styles.container}>
			<h2>Scores</h2>

			<div className={styles.table}>
				<ScoresRow data={SCORES_HEADINGS} />
				{scoresData.map((item, i) => (
					<ScoresRow key={`${item.name}-${i}`} data={item} />
				))}
			</div>
		</main>
	);
};

export default Scores;
