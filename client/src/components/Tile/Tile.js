import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getImageID } from 'utils/getImageID';
import { useGameContext } from 'state/gameContext';

import styles from './Tile.module.scss';

const Tile = ({
	url = '',
	id = '',
	description = '',
	selectedTiles = [],
	onClick = null,
	isMatched = false,
}) => {
	const [{ isGameActive }] = useGameContext();
	const [isHidden, setIsHidden] = useState(true);

	useEffect(() => {
		let setHiddenTimeout;

		if (selectedTiles.length === 2 && selectedTiles.includes(id)) {
			setHiddenTimeout = setTimeout(() => {
				setIsHidden(true);
			}, 2000);
		}

		return () => clearTimeout(setHiddenTimeout);
	}, [selectedTiles, id, isHidden]);

	const handleClick = e => {
		const { id } = e.target;
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

	const isNotMatched =
		selectedTiles.length === 2 &&
		selectedTiles.includes(id) &&
		getImageID(selectedTiles[0]) !== getImageID(selectedTiles[1]);

	const tileClassNames = `${styles.content} ${
		isDisabled ? styles.isDisabled : ''
	} ${isNotMatched ? styles.isNotMatched : ''} ${
		!isGameActive ? styles.isNotActive : ''
	}`;

	return (
		<div className={tileClassNames} onClick={isGameActive ? handleClick : null}>
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
