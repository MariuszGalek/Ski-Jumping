const calculateStylePoints = (styleNotes) => {
	let max = Math.max(...styleNotes);
	let min = Math.min(...styleNotes);

	return styleNotes.reduce((a,b) => a+b ) - (max + min);
};

module.exports = calculateStylePoints;