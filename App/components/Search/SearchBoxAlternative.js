import React, { useState, useCallback, useRef } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { BehaviorSubject } from 'rxjs'
import { debounceTime, filter, tap } from 'rxjs/operators'

/*
 * This component is not used in the project bu is a good sample of how a user interaction can be debounced 
 * to reduce the unnecessary redux action count. Read below for more info.
 * 
 * As the user types to the search box we are sending requests to the server.
 * But we need to reduce the count of request by debouncing.
 * By this way, each keyboard type does not necessarily couse a request, instead, we wait for a little time (600 ms)
 * to see if the user types again.
 * If the user does not type anymore, we send the request.
 *
 * This can be done in two place: Middleware and component.
 * This project debounces in middleware(with one line of code) so this component is not used.  
 * But still this is a good sample, so we did not remove it.
*/

const termChanged = action => {
	const subject$ = new BehaviorSubject('')
	subject$.pipe(
		debounceTime(1000),
		filter(x => x !== '')
	).subscribe(action)
	return text => subject$.next(text)
}

const SearchBox = ({ onSearch }) => {
	const [term, setTerm] = useState('')
	const termChangedRef = useRef(termChanged(onSearch))
	
	const handler = useCallback(text => {
		setTerm(text)
		termChangedRef.current(text)
	}, [])

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder='Card name'
				onChangeText={handler}
			/>
		</View>
	)
}

export default SearchBox

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 5,
		paddingHorizontal: 9,
		backgroundColor: '#eeeeee',
	},
	input: {
		flex: 1,
		height: 28,
		paddingHorizontal: 9,
		backgroundColor: 'white',
		borderRadius: 4,
	}
})