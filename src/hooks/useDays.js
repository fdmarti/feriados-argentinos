import { useState, useEffect } from 'react';
import getCurrentDay from '../helpers/getCurrentday';

export const useDays = () => {
	const [data, setData] = useState({
		missingDays: null,
		isLoading: true
	});


	const getDays = async() => {
		setData({
			missingDays: null,
			isLoading: true
		});

		const response = await fetch('../../data/dias-festivos.json');
		const result = await response.json();

		const { currentYear, currentFullDay } = getCurrentDay();

		const arrayDays = result.map(day => {
			const splitDay = day.day.split('/');
			const fullDay = new Date(splitDay[1] + '/' + splitDay[0] + '/' + currentYear);
			const currentDayformat = new Date(currentFullDay);

			const diffTime = Math.abs(currentDayformat - fullDay);
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

			return {
				diffDays,
				day
			};
		});

		const nextFreeDay = arrayDays.sort((first, second) => first.diffDays - second.diffDays);

		setData({
			missingDays: nextFreeDay[0],
			isLoading: false
		});
	};


	useEffect(() => {
		getDays();
	}, []);


	return {
		data
	};
};
