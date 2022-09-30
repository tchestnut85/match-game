import axios from 'axios';

import { UNSPLASH_API } from '../constants';

const { BASE_URL, ENDPOINT } = UNSPLASH_API;

const unsplashRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Accept-Version': 'v1',
		Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
	},
});

export async function getImages(query, count) {
	const res = await unsplashRequest.get(ENDPOINT, {
		params: { query, count },
	});
	return res.data;
}
