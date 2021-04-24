import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Search">
				<Stack.Screen
					name="Search"
					component={SearchScreen}
					options={{ title: 'Business Search', headerTitleAlign: 'center' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
const styles = StyleSheet.create({});
export default App;
