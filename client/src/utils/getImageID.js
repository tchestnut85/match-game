export function getImageID(id = '', part = 0, splitter = '-') {
	return id.split(splitter)[part];
}
