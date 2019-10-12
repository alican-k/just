import React from 'react'
import { FlatList } from 'react-native'
import ItemsCount from '../common/ItemsCount'
import ListItem from './ListItem'

const MechanicsList = ({ setMechanicName, mechanics }) => 
	<FlatList
		keyExtractor={item => item}
		data={mechanics}
		renderItem={({ item }) => <ListItem item={item} setMechanicName={setMechanicName} />}
		ListHeaderComponent={<ItemsCount count={mechanics.length} />}
		bounces={false}
	/>


export default MechanicsList