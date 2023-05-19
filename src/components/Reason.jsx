import PropTypes from 'prop-types';

export const Reason = ({ day }) => {
	return (
		<section className='reason'>
			<p>
				<a
					href={`http://www.google.com/search?q=${day.split(' ').join('+')}`}
					target='_blank'
					rel='noreferrer'
				>
					{day}
				</a>
			</p>
		</section>
	);
};

Reason.propTypes = {
	day: PropTypes.string.isRequired
};
