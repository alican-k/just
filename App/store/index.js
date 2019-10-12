import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import rootEpic from './epics'

import * as _actions from './actions'
export const actions = _actions
import _selectors from './selectors'
export const selectors = _selectors

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = composeWithDevTools({})
	
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)

export default store
