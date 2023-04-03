import { INavButtons } from './types/index';

export const APP_NAME = 'Match Game';

export const UNSPLASH_API = {
	BASE_URL: 'https://api.unsplash.com',
	ENDPOINT: '/photos/random',
};

export const MESSAGES = {
	modals: {
		gameComplete: {
			primary: 'Nice job matching all the images!',
			secondary: 'Do you want to try again?',
			yes: 'Yeah!',
			no: 'Nope!',
		},
	},
	imageSelect: {
		label: 'Choose Category:',
		optionPlaceholder: 'Choose Category...',
	},
	unsplashCredits: {
		text: 'Images provided by ',
		unsplash: 'Unsplash',
	},
	controls: {
		text: 'Get your game started!',
		submit: 'START!',
	},
	notFound: {
		heading: "Sorry, the page you're looking for doesn't exist!",
		error: 'Error:',
		redirect: 'Navigating back home...',
	},
};

export const LINKS = {
	github: 'https://github.com/tchestnut85/match-game',
	unsplash: 'https://unsplash.com/',
};

export const CATEGORY_OPTIONS = [
	'Dogs',
	'Pugs',
	'Cats',
	'Nature',
	'Running',
	'Video Games',
	'Foosball',
	'Space',
	'Moon',
	'Computer',
	'JavaScript',
];

export const ACTION_TYPES = {
	START_GAME: 'START_GAME',
	SET_IMAGES: 'SET_IMAGES',
	SET_SELECTED_TILES: 'SET_SELECTED_TILES',
	SET_GAME_COMPLETE: 'SET_GAME_COMPLETE',
	HANDLE_MATCH: 'HANDLE_MATCH',
	RESET: 'RESET',
};

export const ROUTES = {
	home: '/',
	scores: 'scores',
};

export const NAV_BUTTONS: INavButtons = {
	HOME: { label: 'Home', route: ROUTES.home },
	SCORES: { label: 'Scores', route: ROUTES.scores },
	RESET: { label: 'Reset' },
};

export const SCORES_HEADINGS = {
	name: 'Name',
	scores: 'Scores',
	total: 'Total',
};

export const STORAGE_ID = 'match_game_tchestnut.dev:';
