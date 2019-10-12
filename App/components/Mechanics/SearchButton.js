import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { actions } from '../../store'
import { horizontalPadding } from '../../constants'

const SearchButton = ({ navigate }) => 
	<TouchableOpacity style={styles.container} onPress={() => navigate('Search')}>
		<Icon name='search' size={22} />
	</TouchableOpacity>

export default connect(
	null, 
	{ navigate: actions.navigate }
)(SearchButton)

const styles =StyleSheet.create({
	container: {
		paddingHorizontal: horizontalPadding
	},
	icon: {
		backgroundColor: 'yellow',
		color: '#333333'
	}
})