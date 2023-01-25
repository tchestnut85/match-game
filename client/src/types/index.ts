import { ActionTypes, GameAction, ProviderValue } from './actionTypes';

interface IImage {
	url: string;
	id: string;
	alt_description: string;
	description: string;
}

interface IGameState {
	isGameActive: boolean;
	category: string;
	images: IImage[];
	selectedTiles: string[];
	matchedIds: string[];
	isGameComplete: boolean;
}

export { IImage, IGameState, ActionTypes };
export type { GameAction, ProviderValue };
