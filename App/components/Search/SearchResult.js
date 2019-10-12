import React from 'react'
import { Loading } from '../UiKit'
import { pickProps } from '../../lib'
import CardList from '../common/CardsList'
import SearchError from './SearchError'
import { quadrupleStatus } from '../../constants'

const components = {
	[quadrupleStatus.NONE]: () => null,
	[quadrupleStatus.REQUESTED]: Loading,
	[quadrupleStatus.FULFILLED]: pickProps('list')(CardList),
	[quadrupleStatus.ERROR]: SearchError
}

const SearchResult = ({ searchStatus, ...rest }) => {
	const Component = components[searchStatus]
	return <Component {...rest} />
}

export default SearchResult