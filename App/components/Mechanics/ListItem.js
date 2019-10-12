import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { horizontalPadding } from '../../constants'

const ListItem = ({ item, setMechanicName }) =>
	<TouchableOpacity 
		style={styles.container} 
		onPress={() => setMechanicName(item)}
	>
		<Text style={styles.name}>
			{item}
		</Text>
		<Icon name='chevron-right' size={18} color='#666666' />
	</TouchableOpacity>

export default ListItem

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: horizontalPadding,
		paddingVertical: 12,
		borderBottomColor: '#fafafa',
		borderBottomWidth: 1,
	},
	name: {
		color: '#111111',
		fontSize: 16,
	}
})