import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './Navigation'
import { NavigationService } from './services'
import store from './store'

const App = () => 
	<Provider store={store}>
		<Navigation ref={NavigationService.setTopLevelNavigator} />
	</Provider>

export default App