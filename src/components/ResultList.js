import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultList = ({ title, results }) => {
	return (
		<View>
			<Text style={styles.titleStyle}> {title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return <ResultsDetail result={item} />;
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
export default ResultList;
