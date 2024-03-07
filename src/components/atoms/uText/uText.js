import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'

const UText = ({priceText}) => {
  return (
    <View style={Style.viewStyle}>
      <Text style={Style.textStyle}>{priceText}</Text>
    </View>
  )
}

export default UText