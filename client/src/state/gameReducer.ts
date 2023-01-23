import { useReducer } from 'react';

import { IGameState, GameAction, ActionTypes } from '../types';

const {
	START_GAME,
	SET_IMAGES,
	SET_SELECTED_TILES,
	SET_GAME_COMPLETE,
	HANDLE_MATCH,
	RESET,
} = ActionTypes;

const initialState: IGameState = {
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

function reducer(
	state: IGameState = initialState,
	action: GameAction
): IGameState {
	switch (action.type) {
		case START_GAME:
			return { ...state, isGameActive: true, category: action.payload };
		case SET_IMAGES:
			return { ...state, images: action.payload };
		case SET_SELECTED_TILES:
			return { ...state, selectedTiles: action.payload };
		case SET_GAME_COMPLETE:
			return { ...state, isGameComplete: action.payload };
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

export { useGameReducer, initialState, ActionTypes };
