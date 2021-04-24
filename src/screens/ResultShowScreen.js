import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ route }) => {
	const [result, setResult] = useState(null);
	const { id } = route.params;

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.imageStyle} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		height: 200,
		width: 300,
		marginBottom: 10,
		borderRadius: 5,
	},
	container: {
		paddingTop: 10,
	},
});

export default ResultShowScreen;
