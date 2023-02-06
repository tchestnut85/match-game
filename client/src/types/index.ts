import { ActionTypes, IGameAction, ProviderValue } from './actionTypes';

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

export type { IImage, IGameState, ActionTypes, IGameAction, ProviderValue };
