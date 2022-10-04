export const Roll = (amount) => {
	const url = `https://rolz.org/api/?${amount}d6.json`;
	const result = { result: 0, dice: [] };
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			result.result = data.result;
			result.dice = [...parseRoll(data.details)];
		});
	console.log(result);
	return result;
};

function parseRoll(str) {
	if (str.length === 1) {
		return [parseInt(str)];
	}
	return str
		.trim()
		.slice(1, -1)
		.split('+')
		.map((value) => {
			return parseInt(value);
		});
}
