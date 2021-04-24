import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	return (
		<View>
			<SearchBar term={term} onTermChange={(searchKey) => setTerm(searchKey)} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
