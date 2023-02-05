import axios from 'axios';

import { UNSPLASH_API } from '../constants';
import { IImage } from '../types';

const { BASE_URL, ENDPOINT } = UNSPLASH_API;
const unsplashKey = import.meta.env.VITE_UNSPLASH_KEY;

interface IImageRequest {
	urls: { regular: string };
	id: string;
	alt_description: string;
	description: string;
}

type GetImagesArray = IImage[];

const unsplashRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Accept-Version': 'v1',
		Authorization: `Client-ID ${unsplashKey}`,
	},
});

export async function getImages(
	query: string,
	count: number
): Promise<GetImagesArray> {
	const { data } = await unsplashRequest.get(ENDPOINT, {
		params: { query, count },
	});

	const images = data.map((image: IImageRequest): IImage => {
		return {
			url: image.urls.regular,
			id: image.id,
			alt_description: image.alt_description,
			description: image.description,
		};
	});

	return images;
}
