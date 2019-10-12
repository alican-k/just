import React from 'react'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'

import Mechanics from './components/Mechanics'
import SearchButton from './components/Mechanics/SearchButton'

import Cards from './components/Cards'
import CardsTitle from './components/Cards/ScreenTitle'

import Search from './components/Search'

const AppNavigator = createStackNavigator({
	Mechanics: { 
		screen: Mechanics, 
		navigationOptions: { 
			title: 'Mechanics',
			headerRight: <SearchButton />,
			headerBackTitle: null,
		} 
	},
	Cards: { 
		screen: Cards, 
		navigationOptions: { 
			headerTitle: <CardsTitle />,
		} 
	},
	Search: {
		screen: Search,
		navigationOptions: {
			title: 'Card Search',
		}
	}
})

export default createAppContainer(AppNavigator)