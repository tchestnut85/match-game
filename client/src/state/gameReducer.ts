import { useReducer } from 'react';

import { IGameState, IGameAction } from '../types';
import { ACTION_TYPES, SCORE_DEDUCTION_DEFAULT } from '../constants';

const {
	START_GAME,
	SET_IMAGES,
	SET_SELECTED_TILES,
	SET_GAME_COMPLETE,
	HANDLE_MATCH,
	SET_SCORE,
	RESET,
} = ACTION_TYPES;

const initialState: IGameState = {
	isGameActive: false,
	category: '',
	images: [],
	selectedTiles: [],
	matchedIds: [],
	isGameComplete: false,
	playerName: '',
	score: 100,
};

function initialize(state = initialState) {
	return state;
}

function reducer(
	state: IGameState = initialState,
	action: IGameAction
): IGameState {
	switch (action.type) {
		case START_GAME:
			return {
				...state,
				isGameActive: true,
				category: action.payload.category,
				playerName: action.payload.playerName,
			};
		case SET_IMAGES:
			return { ...state, images: action.payload };
		case SET_SELECTED_TILES:
			return { ...state, selectedTiles: action.payload };
		case SET_GAME_COMPLETE:
			return { ...state, isGameComplete: action.payload };
		case SET_SCORE:
			return {
				...state,
				score:
					state.score > 0
						? state.score - (action.payload || SCORE_DEDUCTION_DEFAULT)
						: state.score,
			};
		case HANDLE_MATCH:
			return {
				...state,
				matchedIds: action.payload.matchedIds,
				selectedTiles: action.payload.selectedTiles,
			};
		case RESET:
			return initialize();
		default:
			return state;
	}
}

function useGameReducer() {
	return useReducer(reducer, initialState, initialize);
}

export { useGameReducer, initialState };
