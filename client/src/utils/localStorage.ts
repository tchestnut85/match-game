import { STORAGE_ID } from '../constants';

type SetStorage = {
	name: string;
	scores: number[];
};

type CheckStorage = {
	name: string;
	score: number;
};

type ScoresArray = SetStorage[];

class LocalStorage {
	private static instance: LocalStorage;

	private get() {
		return JSON.parse(localStorage.getItem(STORAGE_ID)!) || [];
	}

	private set(scores: ScoresArray) {
		const storageKey = STORAGE_ID;
		localStorage.setItem(storageKey, JSON.stringify(scores));
	}

	save({ name, score }: CheckStorage) {
		const savedScores: ScoresArray = this.get();
		const playerScoreToUpdate = savedScores.find(savedScore => {
			return savedScore.name.toLowerCase() === name.toLowerCase();
		});

		if (playerScoreToUpdate) {
			playerScoreToUpdate.scores.push(score);
		} else {
			savedScores.push({ name, scores: [score] });
		}

		this.set(savedScores);
	}

	getScores(): ScoresArray {
		return this.get();
	}

	public static getInstance() {
		if (!LocalStorage.instance) {
			LocalStorage.instance = new LocalStorage();
		}
		return LocalStorage.instance;
	}
}

export default LocalStorage;
