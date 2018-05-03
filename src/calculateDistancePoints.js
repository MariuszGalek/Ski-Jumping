const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let hill;
	let basicPoints;
	let totalPoints;
	let kPointDistance;

	kPointDistance = distance - kPoint;

	if (hillSize >=85 && hillSize < 110) {
		hill = "normal";
	} else if (
		hillSize >= 110 && hillSize < 185) {
		hill = "large";
	} else if (
		hillSize >= 185) {
		hill = "mammoth";
	}

	if (hillSize >= 185) {
		basicPoints = 120;
	} else {
		basicPoints = 60;
	}
	
	switch(hill) {
		case "normal":
			totalPoints = kPointDistance * 2
			break;
		case "large":
			totalPoints = kPointDistance * 1.8
			break;
		case "mammoth":
			totalPoints = kPointDistance * 1.2
	}

	return totalPoints + basicPoints;
};

module.exports = calculateDistancePoints;