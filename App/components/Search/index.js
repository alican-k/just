import React from 'react'
import { connect } from 'react-redux'
import { compose, pickN, withProps } from '../../lib'
import { Screen } from '../UiKit'
import SearchBox from './SearchBox'
import SearchResult from './SearchResult'
import { actions, selectors } from '../../store'

const Search = ({ term, searchStatus, searchResults, searchRequest }) =>
	<Screen>
		<SearchBox term={term} onSearch={searchRequest} />
		<SearchResult 
			searchStatus={searchStatus}
			list={searchResults}
		/>
	</Screen>

const { searchRequest } = actions
const { term, searchStatus, searchResults } = selectors

export default compose(
	connect(pickN('cards'), { searchRequest }),
	withProps({ term, searchStatus, searchResults })
)(Search)