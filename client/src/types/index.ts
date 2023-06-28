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
	playerName: string;
	score: number;
}

interface INavButtons {
	[key: string]: {
		label: string;
		route?: string;
	};
}

type ControlsInputs = {
	category: string;
	name: string;
};

export type {
	IImage,
	IGameState,
	ActionTypes,
	IGameAction,
	ProviderValue,
	INavButtons,
	ControlsInputs,
};
