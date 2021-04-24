import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');

	// call custom hook
	const [searchAPi, results, errorMsg] = useResults();

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={(searchKey) => setTerm(searchKey)}
				onTermSubmit={() => searchAPi(term)} // this is state term
			/>
			{errorMsg ? (
				<Text>{errorMsg}</Text>
			) : (
				<Text>We have found {results.length} results</Text>
			)}
			<ResultList title={'Cost Effective'} />
			<ResultList title={'Bit Pricier'} />
			<ResultList title={'Big Spender'} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
