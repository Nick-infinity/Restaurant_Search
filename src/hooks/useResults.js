import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMsg, setError] = useState('');

	const searchAPi = async (searchTerm) => {
		try {
			const responses = await yelp.get('/search', {
				params: {
					limit: 50, //?limit=50 auto appended
					term: searchTerm, //useState term is diff than this term -> this is api param
					location: 'san jose',
				},
			});
			setResults(responses.data.businesses);
		} catch (err) {
			setError('Something went wrong');
		}
	};

	// just to render some restaurants when app loads
	useEffect(() => {
		searchAPi('indian');
	}, []);

	return [searchAPi, results, errorMsg];
};
