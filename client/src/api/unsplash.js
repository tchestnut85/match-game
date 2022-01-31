import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const PHOTOS_ENDPOINT = '/photos/random';

const unsplashRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Accept-Version': 'v1',
		Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
	},
});

export async function getImages(query, count) {
	const res = await unsplashRequest.get(PHOTOS_ENDPOINT, {
		params: { query, count },
	});
	return res.data;
}
