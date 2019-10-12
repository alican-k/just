import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BackButton = ({ onBack }) =>
	<TouchableOpacity style={styles.container} onBack={onBack}>
		<Icon name='chevron-left' size={44} style={styles.icon} />
	</TouchableOpacity>

export default BackButton

const styles = StyleSheet.create({
	container: {
		padding: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		color: '#03a9f4'
	}
})