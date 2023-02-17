import styles from './Scores.module.scss';

type ScoresRowProps = {
	data: {
		name: string;
		scores: string;
		total: number | string;
	};
};

const ScoresRow = ({ data }: ScoresRowProps) => {
	const { name, scores, total } = data;

	return (
		<div className={styles.row}>
			<p className={styles.name}>{name}</p>
			<p className={styles.scores}>{scores}</p>
			<p className={styles.total}>{total}</p>
		</div>
	);
};

export default ScoresRow;
