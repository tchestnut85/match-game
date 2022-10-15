import React, { useEffect } from 'react';
import shuffle from 'lodash/shuffle';

import Tile from '../Tile/Tile';
import Modal from '../Modal/Modal';
import styles from './GameBoard.module.scss';

import { useGameContext } from '../../state/gameContext';
import { initialState, ACTION_TYPES } from '../../state/gameReducer';
import { getImages } from '../../api/unsplash';
import { getImageID } from '../../utils/getImageID';
import { MESSAGES } from '../../constants';

// TODO - get tile count from user input
const TILE_COUNT = 12;
const REQUEST_COUNT = TILE_COUNT / 2;

const {
	modals: { gameComplete: MODAL_MESSAGES },
} = MESSAGES;
const MODAL_BUTTONS = {
	yes: MODAL_MESSAGES.yes,
	no: MODAL_MESSAGES.no,
};

const {
	SET_IMAGES,
	SET_SELECTED_TILES,
	SET_GAME_COMPLETE,
	HANDLE_MATCH,
	RESET,
} = ACTION_TYPES;

const placeholderTiles = Array(TILE_COUNT)
	.fill(0)
	.map((_, i) => ({ id: `temp-${i + 1}` }));

const GameBoard = () => {
	const [
		{
			category,
			images,
			selectedTiles,
			matchedIds,
			isGameActive,
			isGameComplete,
		},
		dispatch,
	] = useGameContext();

	const checkIsMatched = id => matchedIds.includes(id);

	const handleImageRequest = async () => {
		const data = await getImages(category, REQUEST_COUNT);
		dispatch({ type: SET_IMAGES, payload: shuffle([...data, ...data]) });
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
		const isMatch = getImageID({ id: tileA }) === getImageID({ id: tileB });
		return isMatch ? handleDidMatch([tileA, tileB]) : handeDidNotMatch();
	};

	const handleRestartGame = () => dispatch({ type: RESET });

	const handleCloseModal = () =>
		dispatch({ type: SET_GAME_COMPLETE, payload: false });

	// invoke image request when the game is started
	useEffect(() => {
		if (isGameActive && !images.length) {
			handleImageRequest();
		}
	}, [isGameActive, images]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (selectedTiles.length === 2) {
			handleCheckMatch();
		}
	}, [selectedTiles]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (matchedIds.length === TILE_COUNT) {
			checkGameComplete(matchedIds);
		}
	}, [matchedIds]); // eslint-disable-line react-hooks/exhaustive-deps

	const imagesToMap =
		isGameActive && !!images.length ? images : placeholderTiles;

	return (
		<section className={styles.container}>
			<div className={styles.tiles}>
				{isGameComplete && (
					<Modal
						isOpen={isGameComplete}
						buttons={MODAL_BUTTONS}
						messages={MODAL_MESSAGES}
						onClose={{ confirm: handleRestartGame, cancel: handleCloseModal }}
					/>
				)}
				{imagesToMap.map(({ url, id, alt_description, description }, i) => {
					const uniqueId = `${id}-${i}`;
					return (
						<Tile
							key={uniqueId}
							id={uniqueId}
							url={url || ''}
							description={alt_description || description}
							selectedTiles={selectedTiles}
							onClick={handleClick}
							isMatched={checkIsMatched(uniqueId)}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default GameBoard;
