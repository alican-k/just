import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { horizontalPadding } from '../../constants'

const ItemsCount = ({ count }) => 
	<View style={styles.header}>
		<Text style={styles.title}>
			{count} ITEM{count === 1 ? '' : 'S'}
		</Text>
	</View>

export default ItemsCount

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
	},
	header: {
		backgroundColor: '#eeeeee',
		paddingHorizontal: horizontalPadding,
		paddingVertical: 10, 
	},
	title: {
		color: '#666666',
		fontSize: 14,
		fontWeight: 'bold',
	}
})