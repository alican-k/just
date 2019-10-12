import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { withProps } from '../../lib'

const ItemImage = ({ img, source, toggle }) => img
	? <Image 
			source={source} 
			resizeMode='contain' 
			style={{ width: '100%', height: 300 }} 
		/>
	: <Text style={styles.text}>Image not found!</Text>

export default withProps(({ img }) => ({
	source: { uri: img } 
}))(ItemImage)

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginVertical: 100
	}
})