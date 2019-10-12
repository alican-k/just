import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const SearchBox = ({ term, onSearch }) => 
	<View style={styles.container}>
		<TextInput
			style={styles.input}
			value={term}
			placeholder='Card name'
			onChangeText={onSearch}
		/>
	</View>

export default SearchBox

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 5,
		paddingHorizontal: 9,
		backgroundColor: '#eeeeee',
	},
	input: {
		flex: 1,
		height: 28,
		paddingHorizontal: 9,
		backgroundColor: 'white',
		borderRadius: 4,
	}
})