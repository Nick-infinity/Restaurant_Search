import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [errorMsg, setError] = useState('');

	const searchAPi = async () => {
		try {
			const responses = await yelp.get('/search', {
				params: {
					limit: 50, //?limit=50 auto appended
					term: term,
					location: 'san jose',
				},
			});
			setResults(responses.data.businesses);
		} catch (err) {
			setError('Something went wrong');
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={(searchKey) => setTerm(searchKey)}
				onTermSubmit={() => searchAPi()}
			/>
			{errorMsg ? (
				<Text>{errorMsg}</Text>
			) : (
				<Text>We have found {results.length} results</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
