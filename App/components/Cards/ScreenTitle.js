import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { pickN, compose, withProps } from '../../lib'
import { selectors } from '../../store'

const ScreenTitle = ({ mechanicName, style }) =>
	<Text style={styles.title}>
		{ mechanicName }
	</Text>

const { mechanicName } =  selectors

export default compose(
	connect(pickN('cards'), null),
	withProps({ mechanicName })
)(ScreenTitle)

const styles = StyleSheet.create({
	title: {
		fontSize: 17,
		fontWeight: 'bold',
		fontFamily: 'Arial'
	}
})