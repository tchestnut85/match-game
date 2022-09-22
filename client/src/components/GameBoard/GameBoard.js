import React, { useEffect, useReducer } from 'react';

import { getImages } from '../../api/unsplash';
import { shuffleArray } from '../../utils/shuffle';
import { getImageID } from '../../utils/getImageID';

import Tile from '../Tile/Tile';
import styles from './GameBoard.module.scss';

// TODO - get tile count and category from user input
const TILE_COUNT = 12;
const REQUEST_COUNT = TILE_COUNT / 2;
const TEMP_CATEGORY = 'pugs';

const ACTION_TYPES = {
	SET_IMAGES: 'SET_IMAGES',
	SET_SELECTED_TILES: 'SET_SELECTED_TILES',
	SET_GAME_COMPLETE: 'SET_GAME_COMPLETE',
	HANDLE_MATCH: 'HANDLE_MATCH',
};
const { SET_IMAGES, SET_SELECTED_TILES, SET_GAME_COMPLETE, HANDLE_MATCH } =
	ACTION_TYPES;

const initialState = {
	images: [],
	selectedTiles: [],
	matchedIds: [],
	isGameComplete: false,
};

function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_IMAGES:
			return { ...state, images: payload };
		case SET_SELECTED_TILES:
			return { ...state, selectedTiles: payload };
		case SET_GAME_COMPLETE:
			return { ...state, isGameComplete: payload };
		case HANDLE_MATCH:
			return {
				...state,
				matchedIds: payload.matchedIds,
				selectedTiles: payload.selectedTiles,
			};
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

	const checkGameComplete = () => {
		dispatch({ type: SET_GAME_COMPLETE, payload: true });
	};

	const handleDidMatch = ([tileA, tileB]) => {
		dispatch({
			type: HANDLE_MATCH,
			payload: {
				matchedIds: [...matchedIds, tileA, tileB],
				selectedTiles: initialState.selectedTiles,
			},
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

	useEffect(() => {
		if (matchedIds.length === TILE_COUNT) {
			checkGameComplete(matchedIds);
		}
	}, [matchedIds]);

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
