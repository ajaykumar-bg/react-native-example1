import React from 'react';

import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
function Header() {
	return (
		<View style={styles.container}>
			<Text>Header Page</Text>
		</View>
	);
}

export default Header;
