import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, pickN } from '../../lib'
import { selectors } from '../../store'
import { Screen } from '../UiKit'
import CardsList from '../common/CardsList'

const CardsIndex = ({ cardsOf }) =>
	<Screen>
		<CardsList list={cardsOf} />
	</Screen>

const { cardsOf } = selectors

export default compose(
	connect(pickN('cards'), null),
	withProps({ cardsOf })
)(CardsIndex)