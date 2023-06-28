import LocalStorage from '../../utils/localStorage';

describe('LocalStorage', () => {
	const name = 'Tina';
	const scores = [50, 100, 200];

	const storageUtil = new LocalStorage();

	test('sets a score array for a given ID', () => {
		storageUtil.save({ name, score: scores[0] });
		expect(storageUtil.getScores(name)).toEqual('50');
	});
});
