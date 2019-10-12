import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Screen } from '../UiKit'
import MechanicsResult from './MechanicsResult'
import { actions, selectors } from '../../store'
import { compose, pickN, withProps } from '../../lib'

const MechanicsIndex = (props) => {
	useEffect(() => { 
		props.cardsRequest() 
	}, [])

	return (
		<Screen>
			<MechanicsResult {...props} /> 
		</Screen>
	)
}

const { cardsRequest, setMechanicName } = actions
const { mechanicsStatus, mechanics } = selectors

export default compose(
	connect(pickN('cards'), { cardsRequest, setMechanicName }),
	withProps({ mechanicsStatus, mechanics })
)(MechanicsIndex)