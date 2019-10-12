import { of, from } from 'rxjs'
import { filter, map, mapTo, switchMap, tap, ignoreElements, debounceTime, catchError } from 'rxjs/operators'
import { ofType, combineEpics } from 'redux-observable'
import { NavigationService } from '../services'
import { types, cardsFulfilled, cardsError, navigate as navigateAction, searchFulfilled, searchError } from './actions'
import { ApiService } from '../services'

const cardsRequest = action$ => action$.pipe(
	ofType(types.CARDS_REQUEST),
	switchMap(() => from(ApiService.cards())
		.pipe(
			map(cardsFulfilled),
			catchError(() => of(cardsError()))
		)
	),
)

const setMechanicName = action$ => action$.pipe(
	ofType(types.SET_MECHANIC_NAME),
	mapTo(navigateAction('Cards')),
)

const searchRequest = action$ => action$.pipe(
	ofType(types.SEARCH_REQUEST),
	debounceTime(600),
	switchMap(action => {
		const { term } = action.payload
		const obs = term ? from(ApiService.search(term)) : of([])
		return obs.pipe(
			map(searchFulfilled),
			catchError(() => of(searchError()))
		)
	}),
)

const navigate = action$ => action$.pipe(
	ofType(types.NAVIGATE),
	tap(action => NavigationService.navigate(action.payload.screen)),
	ignoreElements()
)
const back = action$ => action$.pipe(
	ofType(types.BACK),
	tap(action => NavigationService.back()),
	ignoreElements()
)

export default combineEpics(
	cardsRequest,
	setMechanicName,
	searchRequest,
	navigate,
	back
)