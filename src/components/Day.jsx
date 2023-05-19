import PropTypes from 'prop-types';

export const Day = ({ day }) => {
	return (
		<section className='day'>
			<p>{day}</p>
		</section>
	);
};

Day.propTypes = {
	day: PropTypes.string.isRequired
};
