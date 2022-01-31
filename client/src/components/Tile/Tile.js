import React from 'react';

import styles from './Tile.module.css';

const Tile = ({ url, id, description }) => {
	return (
		<div className={styles.content}>
			<img id={id} src={url} alt={description} />
		</div>
	);
};

export default Tile;
