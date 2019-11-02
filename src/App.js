import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

	// Main state
	// city = state, saceCity = this.setState({})
	const [city, saveCity] = useState('');
	const [country, saveCountry] = useState('');
	const [error, saveError] = useState(false);
	const [result, saveResult] = useState({});

	// Same operation as the component life cycle
	useEffect(() => {

		// Prevent execution
		if(city === '') return;

		const checkAPI = async () => {
			const appId = '';

			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
	
			// Check URL
			const response = await fetch(url);
			const result = await response.json();

			saveResult(result);
		}

		checkAPI();
	}, [city, country]);

	const queryData = data => {

		// Validate data
		if (data.city === '' || data.country === '') {
			saveError(true);
			return;
		}

		// If city and country exist, add them to the state
		saveCity(data.city);
		saveCountry(data.country);
		saveError(false);
	}

	// Load a component conditionally
	let component;
	if (error) {
		// Show error
		component = <Error message={'Both fields are mandatory'} />
	} else if (result.cod === "404") {
		component = <Error message="The city doesn't exist in our registry" />
	} else {
		// Show weather
		component = <Weather result={result} />;
	}

	return (
		<div className="App">
			<Header
				title='React Weather App'
			/>
			<div className="container-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Form
								queryData={queryData}
							/>
						</div>
						<div className="col s12 m6">
							{component}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
