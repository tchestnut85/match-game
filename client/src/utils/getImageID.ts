type GetImageIdParams = {
	id: string;
	part?: number;
	delimiter?: string;
};

export function getImageID({
	id,
	part = 0,
	delimiter = '-',
}: GetImageIdParams): string {
	return id.split(delimiter)[part];
}
