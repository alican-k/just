import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { horizontalPadding } from '../../constants'
 
const CardItemData = ({ keys, item }) => 
	<View style={styles.container}>
		{keys.map(key => 
			<View style={styles.row} key={key}>
				<Text style={styles.key}>{key}: </Text>
				<Text style={styles.value}>{item[key]}</Text>
			</View>
		)}
	</View>
	

export default CardItemData

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
		marginBottom: 2,
	},
	key: {
		fontWeight: 'bold'
	},
	value: {

	}
})