import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const SearchError = () => 
	<View style={styles.container}>
		<Text style={styles.text}>An error has ocurred during request.</Text>
		<Text style={styles.text}>Type to try again.</Text>
	</View>

export default SearchError

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	text: {
		marginVertical: 20
	}
})