import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
function Home() {
	return (
		<View style={styles.container}>
			<Text>Home Page</Text>
		</View>
	);
}

export default Home;
