import React from 'react'
import { FlatList } from 'react-native'
import ItemsCount from '../common/ItemsCount'
import CardItem from '../common/CardItem'

const CardsList = ({ list }) => 
	<FlatList
		keyExtractor={item => item.cardId}
		data={list}
		renderItem={({ item }) => <CardItem item={item} />}
		ListHeaderComponent={<ItemsCount count={list.length} />}
		bounces={false}
	/>

export default CardsList