import React from 'react'
import { compose as _compose, always as _always, is, map, omit, pick } from 'ramda'

export const compose = _compose
export const always = _always

export const pickN = (...keys) => props => pick(keys, props)

export const composeKeysWith = fn => map(value => compose(value, fn))

export const withProps = (propsMapper, willOmit=[]) => Component => props => {
	const newProps = is(Function, propsMapper)
		?	propsMapper(props)
		:	map((pred) => pred(props))(propsMapper)

	const allProps = willOmit === 'OTHERS'
		? newProps
		: {...props, ...newProps}

	const finalProps = willOmit === 'OTHERS'
		? allProps
		: omit(willOmit, allProps)

	return <Component {...finalProps} />
}

export const pickProps = (...keys) => Component => props => <Component {...pick(keys, props)} /> 