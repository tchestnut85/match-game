import { STORAGE_ID } from '../constants';

type SetStorage = {
	name: string;
	scores: number[];
};

type CheckStorage = {
	name: string;
	score: number;
};

type ScoresArray = number[];

class LocalStorage {
	private static instance: LocalStorage;

	private get(storageKey: string) {
		return JSON.parse(localStorage.getItem(storageKey)!) || [];
	}

	private set({ name, scores }: SetStorage) {
		const storageKey = `${STORAGE_ID}${name.toLowerCase()}`;
		localStorage.setItem(storageKey, JSON.stringify(scores));
	}

	saveScore({ name, score }: CheckStorage) {
		const storageKey = `${STORAGE_ID}${name.toLowerCase()}`;
		const savedScores: ScoresArray = this.get(storageKey);

		this.set({
			name,
			scores: !!savedScores.length ? [...savedScores, score] : [score],
		});
	}

	getScores(storageKey: string) {
		return this.get(storageKey);
	}

	public static getLocalStorage() {
		if (!LocalStorage.instance) {
			LocalStorage.instance = new LocalStorage();
		}
		return LocalStorage.instance;
	}
}

export default LocalStorage;
