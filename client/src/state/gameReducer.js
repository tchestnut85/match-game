import { useReducer } from 'react';

const ACTION_TYPES = {
	START_GAME: 'START_GAME',
	SET_IMAGES: 'SET_IMAGES',
	SET_SELECTED_TILES: 'SET_SELECTED_TILES',
	SET_GAME_COMPLETE: 'SET_GAME_COMPLETE',
	HANDLE_MATCH: 'HANDLE_MATCH',
	RESET: 'RESET',
};
const {
	START_GAME,
	SET_IMAGES,
	SET_SELECTED_TILES,
	SET_GAME_COMPLETE,
	HANDLE_MATCH,
	RESET,
} = ACTION_TYPES;

const initialState = {
	isGameActive: false,
	category: '',
	images: [],
	selectedTiles: [],
	matchedIds: [],
	isGameComplete: false,
};

function initialize(state = initialState) {
	return state;
}

function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case START_GAME:
			return { ...state, isGameActive: true, category: payload.category };
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
		case RESET:
			return initialize();
		default:
			return state;
	}
}

function useGameReducer() {
	return useReducer(reducer, initialState, initialize);
}

export { useGameReducer, initialState, ACTION_TYPES };
