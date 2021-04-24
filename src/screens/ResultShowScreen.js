import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const ResultShowScreen = ({ route }) => {
	const { id } = route.params;
	return (
		<View>
			<Text>{id}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ResultShowScreen;
