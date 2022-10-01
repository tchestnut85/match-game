import { getImageID } from '../../utils/getImageID';

describe('getImageID', () => {
	const TEST_BASE = '123456';
	const TEST_ID = `${TEST_BASE}-01`;

	test('should return a string', () => {
		expect(typeof getImageID({ id: TEST_ID })).toEqual('string');
	});

	test('should return the left hand portion of the given ID', () => {
		expect(getImageID({ id: TEST_ID })).toEqual(TEST_BASE);
	});
});
