import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const Loading = () =>
	<View style={styles.container}>
		<ActivityIndicator size='large' />
	</View>

export default Loading

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})