import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');

	// destructure custom hook
	const [searchAPi, results, errorMsg] = useResults();

	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'

		return results.filter((result) => {
			return result.price === price;
		});
	};

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
			<ResultList
				title={'Cost Effective'}
				results={filterResultsByPrice('$')}
			/>
			<ResultList title={'Bit Pricier'} results={filterResultsByPrice('$$')} />
			<ResultList title={'Big Spender'} results={filterResultsByPrice('$$$')} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
