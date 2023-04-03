import { useEffect } from 'react';
import shuffle from 'lodash/shuffle';

import Tile from '../Tile/Tile';
import Modal from '../Modal/Modal';

import { useGameContext } from '../../state/gameContext';
import { initialState } from '../../state/gameReducer';
import { getImages } from '../../api/unsplash';
import { getImageID } from '../../utils/getImageID';
import { MESSAGES, ACTION_TYPES } from '../../constants';
import LocalStorage from '../../utils/localStorage';

import styles from './GameBoard.module.scss';

const localStorage = LocalStorage.getLocalStorage();

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
	] = useGameContext()!;

	const checkIsMatched = (id: string) => matchedIds.includes(id);

	const checkIsGameComplete = () => {
		// TODO - implement logic for tracking player name and score and use those values when game is complete
		localStorage.saveScore({ name: 'Tom', score: 500 });
		dispatch({ type: SET_GAME_COMPLETE, payload: true });
	};

	const handleImageRequest = async () => {
		const data = await getImages(category, REQUEST_COUNT);
		dispatch({ type: SET_IMAGES, payload: shuffle([...data, ...data]) });
	};

	const handleClick = (id: string) => {
		if (selectedTiles.includes(id)) return;
		dispatch({ type: SET_SELECTED_TILES, payload: [...selectedTiles, id] });
	};

	const handleDidNotMatch = () => {
		setTimeout(() => {
			dispatch({
				type: SET_SELECTED_TILES,
				payload: initialState.selectedTiles,
			});
		}, 2000);
	};

	const handleDidMatch = ([tileA, tileB]: string[]) => {
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
		return isMatch ? handleDidMatch([tileA, tileB]) : handleDidNotMatch();
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
			checkIsGameComplete();
		}
	}, [matchedIds]); // eslint-disable-line react-hooks/exhaustive-deps

	const renderTiles = () => {
		return isGameActive && !!images.length
			? images.map(({ url, id, alt_description, description }, i) => {
					const uniqueId = `${id}-${i}`;
					return (
						<Tile
							key={uniqueId}
							id={uniqueId}
							url={url || ''}
							description={alt_description || description}
							selectedTiles={selectedTiles}
							onClick={() => handleClick(uniqueId)}
							isMatched={checkIsMatched(uniqueId)}
						/>
					);
			  })
			: placeholderTiles.map(({ id }, i) => {
					const uniqueId = `${id}-${i}`;
					return (
						<Tile
							key={uniqueId}
							id={uniqueId}
							onClick={() => handleClick(uniqueId)}
						/>
					);
			  });
	};

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
				{renderTiles()}
			</div>
		</section>
	);
};

export default GameBoard;
