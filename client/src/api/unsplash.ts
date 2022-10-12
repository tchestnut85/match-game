import axios from 'axios';

import { UNSPLASH_API } from '../constants';

const { BASE_URL, ENDPOINT } = UNSPLASH_API;

interface GetImagesInterface {
	urls: { regular: string };
	id: string;
	alt_description: string;
	description: string;
}
type GetImagesArray = GetImagesInterface[];

const unsplashRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Accept-Version': 'v1',
		Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
	},
});

export async function getImages(
	query: string,
	count: number
): Promise<GetImagesArray> {
	const res = await unsplashRequest.get(ENDPOINT, {
		params: { query, count },
	});

	return res.data;
}
