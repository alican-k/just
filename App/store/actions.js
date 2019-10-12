const ac = (type, payload) => ({type, payload})

const CARDS_REQUEST = 'CARDS_REQUEST'
const CARDS_FULFILLED = 'CARDS_FULFILLED'
const CARDS_ERROR = 'CARDS_ERROR'

const SET_MECHANIC_NAME = 'SET_MECHANIC_NAME'

const SEARCH_REQUEST = 'SEARCH_REQUEST'
const SEARCH_FULFILLED = 'SEARCH_FULFILLED'
const SEARCH_ERROR = 'SEARCH_ERROR'

const NAVIGATE = 'NAVIGATE'
const BACK = 'BACK'

export const cardsRequest = () => ac(CARDS_REQUEST)
export const cardsFulfilled = cards => ac(CARDS_FULFILLED, { cards })
export const cardsError = () => ac(CARDS_ERROR)

export const setMechanicName = mechanicName => ac(SET_MECHANIC_NAME, { mechanicName })

export const searchRequest = term => ac(SEARCH_REQUEST, { term })
export const searchFulfilled = searchResults => ac(SEARCH_FULFILLED, { searchResults })
export const searchError = () => ac(SEARCH_ERROR)

export const navigate = screen => ac(NAVIGATE, { screen })
export const back = () => ac(BACK)

export const types = {
	CARDS_REQUEST,
	CARDS_FULFILLED,
	CARDS_ERROR,
	SET_MECHANIC_NAME,
	SEARCH_REQUEST,
	SEARCH_FULFILLED,
	SEARCH_ERROR,
	NAVIGATE,
	BACK
}