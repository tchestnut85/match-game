import { Dispatch } from 'react';

import { IGameState } from './index';

export enum ActionTypes {
	START_GAME = 'START_GAME',
	SET_IMAGES = 'SET_IMAGES',
	SET_SELECTED_TILES = 'SET_SELECTED_TILES',
	SET_GAME_COMPLETE = 'SET_GAME_COMPLETE',
	HANDLE_MATCH = 'HANDLE_MATCH',
	SET_SCORE = 'SET_SCORE',
	RESET = 'RESET',
}

export interface IGameAction {
	type: string;
	payload?: any; // TODO - replace any with more specific types
}

export type ProviderValue = [IGameState, Dispatch<IGameAction>];
