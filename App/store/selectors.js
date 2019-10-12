import { __, compose, filter, find, flatten, map, prop, propEq, uniqBy } from 'ramda'
import { composeKeysWith } from '../lib'
import { quadrupleStatus } from '../constants'

const mechanics = compose(
	map(prop('name')),
	uniqBy(prop('name')),
	flatten,
	map(prop('mechanics')),
	prop('cards')
)

const _cardIncludesMechanic = name => compose(
	Boolean,
	find(propEq('name', name)),
	prop('mechanics')
)

const mechanicName = prop('mechanicName')

const cardsOf = state => {
	const { mechanicName, cards } = state
	return filter(_cardIncludesMechanic(mechanicName))(cards)
}

const mechanicsStatus = prop('mechanicsStatus')

const term = prop('term')
const searchResults = prop('searchResults')
const searchStatus = prop('searchStatus')

export default composeKeysWith(prop('cards'))({
	mechanicsStatus, mechanics, 
	cardsOf, mechanicName,
	term, searchResults,searchStatus
})