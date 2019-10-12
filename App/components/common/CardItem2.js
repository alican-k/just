import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { keys } from 'ramda'
import ItemData from './ItemData'
import ItemImage from './ItemImage'
import { horizontalPadding } from '../../constants'

const CardItem = ({ item }) => {
	const { cardId, mechanics, img, imgGold, ...rest } = item
	const _keys = keys(rest)

	return (
		<View style={styles.container}>
			<Text style={styles.cardId}>{item.cardId}</Text>
			<TouchableOpacity>
				{ false
					? <ItemImage img={img} />
					: <ItemData keys={_keys} item={item} />
				}
			</TouchableOpacity>
		</View>
	)
}

export default CardItem

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 6,
		borderBottomColor: '#fafafa',
		paddingHorizontal: horizontalPadding,
		paddingVertical: 10,
	},
	cardId: {
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 10,
	},
})