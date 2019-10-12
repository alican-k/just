import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const MechanicsError = ({ cardsRequest }) => 
	<View style={styles.container}>
		<Text style={styles.text}>An error has ocurred during request.</Text>
		<Button onPress={cardsRequest} title='Try again' />
	</View>

export default MechanicsError

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	text: {
		marginVertical: 20
	}
})