import { IImage } from './index';

export enum ActionTypes {
	START_GAME = 'START_GAME',
	SET_IMAGES = 'SET_IMAGES',
	SET_SELECTED_TILES = 'SET_SELECTED_TILES',
	SET_GAME_COMPLETE = 'SET_GAME_COMPLETE',
	HANDLE_MATCH = 'HANDLE_MATCH',
	RESET = 'RESET',
}

interface IStartGameAction {
	type: ActionTypes.START_GAME;
	payload: string;
}

interface ISetImagesAction {
	type: ActionTypes.SET_IMAGES;
	payload: IImage[];
}

interface ISetSelectedTilesAction {
	type: ActionTypes.SET_SELECTED_TILES;
	payload: string[];
}

interface ISetGameCompleteAction {
	type: ActionTypes.SET_GAME_COMPLETE;
	payload: boolean;
}

interface IHandleMatchAction {
	type: ActionTypes.HANDLE_MATCH;
	payload: {
		matchedIds: string[];
		selectedTiles: string[];
	};
}

interface IResetAction {
	type: ActionTypes.RESET;
	payload: never;
}

export type IGameAction =
	| IStartGameAction
	| ISetImagesAction
	| ISetSelectedTilesAction
	| ISetGameCompleteAction
	| IHandleMatchAction
	| IResetAction;
