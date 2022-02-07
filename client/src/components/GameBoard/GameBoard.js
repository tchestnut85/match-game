import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile';

import { getImages } from '../../api/unsplash';
import { shuffleArray } from '../../utils/shuffle';
import styles from './GameBoard.module.css';

// TODO - get tile count and category from user input
const TILE_COUNT = 12;
const TEMP_CATEGORY = 'dog';

const GameBoard = () => {
	const [images, setImages] = useState([]);
	const [selectedTiles, setSelectedTiles] = useState([]);
	console.log('selectedTiles:', selectedTiles);

	const handleImageRequest = async () => {
		const data = await getImages(TEMP_CATEGORY, TILE_COUNT / 2);
		setImages(shuffleArray([...data, ...data]));
	};

	useEffect(() => {
		handleImageRequest();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.tiles}>
				{images.map(({ urls, id, alt_description, description }, i) => (
					<Tile
						key={`${id}-${i}`}
						id={`${id}-${i}`}
						url={urls.regular}
						description={alt_description || description}
						setSelectedTiles={setSelectedTiles}
					/>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
