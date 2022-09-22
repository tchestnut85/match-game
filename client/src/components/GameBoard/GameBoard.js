import React, { useEffect, useReducer } from 'react';
import Tile from '../Tile/Tile';

import { getImages } from '../../api/unsplash';
import { shuffleArray } from '../../utils/shuffle';
import { getImageID } from '../../utils/getImageID';
import styles from './GameBoard.module.css';

// TODO - get tile count and category from user input
const TILE_COUNT = 12;
const REQUEST_COUNT = TILE_COUNT / 2;
const TEMP_CATEGORY = 'pugs';

const ACTION_TYPES = {
	SET_IMAGES: 'SET_IMAGES',
	SET_SELECTED_TILES: 'SET_SELECTED_TILES',
	SET_MATCHED_IDS: 'SET_MATCHED_IDS',
};
const { SET_IMAGES, SET_MATCHED_IDS, SET_SELECTED_TILES } = ACTION_TYPES;

const initialState = {
	images: [],
	selectedTiles: [],
	matchedIds: [],
};

function reducer(state, { type, payload }) {
	switch (type) {
		case SET_IMAGES:
			return { ...state, images: payload };
		case SET_SELECTED_TILES:
			return { ...state, selectedTiles: payload };
		case SET_MATCHED_IDS:
			return { ...state, matchedIds: payload };
		default:
			return state;
	}
}

const GameBoard = () => {
	const [{ images, selectedTiles, matchedIds }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const checkIsMatched = id => matchedIds.includes(id);

	const handleImageRequest = async () => {
		const data = await getImages(TEMP_CATEGORY, REQUEST_COUNT);
		dispatch({ type: SET_IMAGES, payload: shuffleArray([...data, ...data]) });
	};

	const handleClick = id => {
		console.log('handleClick id:', id);
		if (selectedTiles.includes(id)) return;
		dispatch({ type: SET_SELECTED_TILES, payload: [...selectedTiles, id] });
	};

	const handeDidNotMatch = () => {
		setTimeout(() => {
			dispatch({
				type: SET_SELECTED_TILES,
				payload: initialState.selectedTiles,
			});
		}, 2000);
	};

	const handleDidMatch = ([tileA, tileB]) => {
		// TODO - add logic to check if all of the pictures were matched
		dispatch({ type: SET_MATCHED_IDS, payload: [...matchedIds, tileA, tileB] });
		dispatch({
			type: SET_SELECTED_TILES,
			payload: initialState.selectedTiles,
		});
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
