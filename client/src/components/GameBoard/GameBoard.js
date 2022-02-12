import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile';

import { getImages } from '../../api/unsplash';
import { shuffleArray } from '../../utils/shuffle';
import { getImageID } from '../../utils/getImageID';
import styles from './GameBoard.module.css';

const initialSelectedTiles = []; // TODO - change to an object {tileA: '', tileB: ''}

// TODO - get tile count and category from user input
const TILE_COUNT = 12;
const REQUEST_COUNT = TILE_COUNT / 2;
const TEMP_CATEGORY = 'pugs';

const GameBoard = () => {
	const [images, setImages] = useState([]);
	const [selectedTiles, setSelectedTiles] = useState([]);
	const [matchedIds, setMatchedIds] = useState([]);
	const checkIsMatched = id => matchedIds.includes(id);

	const handleImageRequest = async () => {
		const data = await getImages(TEMP_CATEGORY, REQUEST_COUNT);
		setImages(shuffleArray([...data, ...data]));
	};

	const handleClick = id => {
		if (selectedTiles.includes(id)) return;
		setSelectedTiles([...selectedTiles, id]);
	};

	const handeDidNotMatch = () => {
		setTimeout(() => {
			setSelectedTiles(initialSelectedTiles);
		}, 2000);
	};

	const handleDidMatch = ([tileA, tileB]) => {
		// TODO - add logic to check if all of the pictures were matched
		setMatchedIds([...matchedIds, tileA, tileB]);
		setSelectedTiles(initialSelectedTiles);
	};

	const handleCheckMatch = () => {
		const [tileA, tileB] = selectedTiles;
		const isMatch = getImageID(tileA) === getImageID(tileB);
		return isMatch ? handleDidMatch([tileA, tileB]) : handeDidNotMatch();
	};

	useEffect(() => {
		handleImageRequest();
	}, []);

	useEffect(() => {
		if (selectedTiles.length === 2) {
			handleCheckMatch();
		}
	}, [selectedTiles]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className={styles.container}>
			<div className={styles.tiles}>
				{images.map(({ urls, id, alt_description, description }, i) => {
					const uniqueId = `${id}-${i}`;
					return (
						<Tile
							key={uniqueId}
							id={uniqueId}
							url={urls.regular}
							description={alt_description || description}
							selectedTiles={selectedTiles}
							onClick={handleClick}
							isMatched={checkIsMatched(uniqueId)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default GameBoard;
