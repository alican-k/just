import { __, compose, filter, flatten, map, prop, values, uniqBy } from 'ramda'
import { quadrupleStatus } from '../../constants'
import { types } from '../actions'

const initialState = {
	cards: [],
	mechanicsStatus: quadrupleStatus.NONE,

	mechanicName: null,

	searchStatus: quadrupleStatus.NONE,
	term: null,
	searchResults: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case types.CARDS_REQUEST: {
			const mechanicsStatus = quadrupleStatus.REQUESTED
			return { ...state, mechanicsStatus }
		}

		case types.CARDS_FULFILLED: {
			const cards = compose(
				filter(card => Boolean(card.mechanics)),
				flatten,
				values
			)(action.payload.cards)

			const mechanicsStatus = quadrupleStatus.FULFILLED

			return { ...state, cards, mechanicsStatus }
		}

		case types.CARDS_ERROR: {
			const mechanicsStatus = quadrupleStatus.ERROR
			return { ...state, mechanicsStatus }
		}

		case types.SET_MECHANIC_NAME: {
			const { mechanicName } = action.payload
			return { ...state, mechanicName }
		}

		case types.SEARCH_REQUEST: {
			const { term } = action.payload
			const searchStatus = quadrupleStatus.REQUESTED
			return { ...state, term, searchStatus }
		}

		case types.SEARCH_FULFILLED: {
			const { searchResults: _searchResults } = action.payload
			const searchResults = _searchResults.error ? [] : _searchResults
			const searchStatus = quadrupleStatus.FULFILLED
			return { ...state, searchResults, searchStatus }		
		}

		case types.SEARCH_ERROR: {
			const searchStatus = quadrupleStatus.ERROR
			return { ...state, searchStatus }
		}
		
		default:
			return state
	}
}

export default reducer