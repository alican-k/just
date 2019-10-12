import React from 'react'
import { Animated, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { keys } from 'ramda'
import ItemData from './ItemData'
import ItemImage from './ItemImage'
import { horizontalPadding } from '../../constants'

export default class CardItem extends React.Component {
	constructor(props) {
		super(props)
		this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
	}

	flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }


	render() {
		const  { item } = this.props
		const { cardId, mechanics, img, imgGold, ...rest } = this.props.item
		const _keys = keys(rest)

		const cardAnim = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const card2Anim = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

		return (
			<View style={styles.container}>
				<Text style={styles.cardId}>{item.cardId}</Text>
				<TouchableOpacity onPress={() => this.flipCard()}>
					<Animated.View style={[styles.card, cardAnim]}>
						<ItemImage img={img} />
					</Animated.View>
					<Animated.View style={[card2Anim, styles.card, styles.card2]}>
						<ItemData keys={_keys} item={item} />
					</Animated.View>
				</TouchableOpacity>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		// borderBottomWidth: 6,
		// borderBottomColor: '#eeeeee',
		// paddingHorizontal: horizontalPadding,
		// paddingVertical: 10,
	},
	cardId: {
		fontSize: 18,
		textAlign: 'center',
		paddingVertical: 10,
		backgroundColor: '#dddddd',
	},
	card: {
    alignItems: 'stretch',
    justifyContent: 'center',
		backfaceVisibility: 'hidden',
		backgroundColor: '#fafafa',
  },
  card2: {
    position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		paddingHorizontal: 8
  },

})