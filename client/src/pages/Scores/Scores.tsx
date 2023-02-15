import ScoresRow from './ScoresRow';

import { SCORES_HEADINGS } from '../../constants';

import styles from './Scores.module.scss';

const data = [
	{ name: 'Melissa', scores: [50, 200, 50, 234, 350] },
	{ name: 'Tom', scores: [10, 200, 50, 234, 350] },
	{ name: 'Frodo', scores: [100, 20, 50, 234, 350] },
	{ name: 'Bill', scores: [100, 500, 50, 234, 350] },
	{ name: 'Kim', scores: [100, 203, 50, 234, 350] },
];

const Scores = () => {
	const scoresData = data.map(({ name, scores }) => {
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
