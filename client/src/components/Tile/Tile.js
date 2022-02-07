import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Tile.module.css';

const Tile = ({ url = '', id = '', description = '', setSelectedTiles }) => {
	const [isHidden, setIsHidden] = useState(true);

	const handleClick = e => {
		setIsHidden(!isHidden);
		setSelectedTiles([...setSelectedTiles, id]);
	};

	return (
		<div className={styles.content} onClick={handleClick}>
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
	description: PropTypes.string.isRequired,
	setSelectedTiles: PropTypes.func.isRequired,
};

export default Tile;
