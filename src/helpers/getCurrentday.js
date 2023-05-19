const getCurrentDay = () => {
	const date = new Date();

	return {
		currentDay: `${date.getDate()}`,
		currentMonth: `${date.getMonth() + 1}`,
		currentYear: `${date.getFullYear()}`,
		currentFullDay: date
	};
};

export default getCurrentDay;
