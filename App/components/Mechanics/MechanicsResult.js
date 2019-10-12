import React from 'react'
import MechanicsList from './MechanicsList'
import { Loading } from '../UiKit'
import MechanicsError from './MechanicsError'
import { pickProps } from '../../lib'
import { quadrupleStatus } from '../../constants'

const components = {
	[quadrupleStatus.NONE]: () => null,
	[quadrupleStatus.REQUESTED]: Loading,
	[quadrupleStatus.FULFILLED]: pickProps('setMechanicName', 'mechanics')(MechanicsList),
	[quadrupleStatus.ERROR]: pickProps('cardsRequest')(MechanicsError)
}

const MechanicsResult = ({ mechanicsStatus, ...rest }) => {
	const Component = components[mechanicsStatus]
	return <Component {...rest} />
}

export default MechanicsResult