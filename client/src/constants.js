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
};

export const LINKS = {
	github: 'https://github.com/tchestnut85/match-game',
	unsplash: 'https://unsplash.com/',
};

export const IMAGE_OPTIONS = [
	'Dogs',
	'Pugs',
	'Cats',
	'Mountains',
	'Video Games',
	'Trees',
	'Flowers',
	'Space',
	'Moon',
	'Computer',
	'JavaScript',
];
