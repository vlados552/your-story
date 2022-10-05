export const getDescriptions = async () => {
	const urlStr = `https://www.dnd5eapi.co/api/ability-scores/str`;
	const urlDex = `https://www.dnd5eapi.co/api/ability-scores/dex`;
	const urlCon = `https://www.dnd5eapi.co/api/ability-scores/con`;
	let result = {};
	await fetch(urlStr)
		.then((res) => res.json())
		.then((data) => (result.strDescription = data.desc[0]));
	await fetch(urlDex)
		.then((res) => res.json())
		.then((data) => (result.dexDescription = data.desc[0]));
	await fetch(urlCon)
		.then((res) => res.json())
		.then((data) => (result.conDescription = data.desc[0]));

	return result;
};
