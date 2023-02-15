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
			<p>{name}</p>
			<p>{scores}</p>
			<p>{total}</p>
		</div>
	);
};

export default ScoresRow;
