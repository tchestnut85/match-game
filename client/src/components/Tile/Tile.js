import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Tile.module.css';

const Tile = ({
	url = '',
	id = '',
	description = '',
	selectedTiles = [],
	onClick = null,
	isMatched = false,
}) => {
	const [isHidden, setIsHidden] = useState(true);

	useEffect(() => {
		if (selectedTiles.length === 2 && selectedTiles.includes(id)) {
			setTimeout(() => {
				setIsHidden(true);
			}, 2000);
		}
	}, [selectedTiles, id, isHidden]);

	const handleClick = e => {
		const id = e.target.id;
		if (isMatched) return;
		setIsHidden(false);
		onClick(id);
	};

	const matchedStyles = `${styles.content} ${styles.isDisabled} ${styles.isMatched}`;

	if (isMatched) {
		return (
			<div className={matchedStyles} onClick={handleClick}>
				<img id={id} src={url} alt={description} />
			</div>
		);
	}

	const isDisabled =
		selectedTiles.includes(id) ||
		(selectedTiles.length === 2 && !selectedTiles.includes(id));

	return (
		<div
			className={`${styles.content} ${isDisabled ? styles.isDisabled : null}`}
			onClick={handleClick}
		>
			{isHidden ? (
				<i id={id} className="fas fa-question-circle fa-7x" />
			) : (
				<img id={id} src={url} alt={description} />
			)}
		</div>
	);
};

Tile.propTypes = {
	url: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	description: PropTypes.string,
	selectedTiles: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	isMatched: PropTypes.bool.isRequired,
};

export default Tile;
