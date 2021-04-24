import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder={'Search'}
				style={styles.inputStyel}
				value={term}
				onChangeText={(newTerm) => onTermChange(newTerm)}
				onEndEditing={() => onTermSubmit()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#F0eeee',
		height: 50,
		borderRadius: 10,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 10,
	},
	inputStyel: {
		fontSize: 18,
		flex: 1,
		padding: 5,
	},
	iconStyle: {
		fontSize: 40,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});
export default SearchBar;
