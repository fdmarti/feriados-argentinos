import './App.css';
import { Day, Reason, Loading } from './components';
import { useDays } from './hooks/useDays';

function App() {
	const { data } = useDays();
	const { missingDays, isLoading } = data;

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<section className='main-card'>
					<p>Faltan</p>
					<h1>{`${missingDays.diffDays} dias`}</h1>
					<p>para el proximo feriado.</p>

					<Day day={missingDays.day.day} />
					<hr />
					<Reason day={missingDays.day.reason} />
				</section>
			)}
		</>
	);
}

export default App;
