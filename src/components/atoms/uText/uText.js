import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'

const UText = ({priceText,borderBottomWidth=0.5}) => {
  return (
    <View style={[Style.viewStyle,{borderBottomWidth:borderBottomWidth}]}>
      <Text style={Style.textStyle}>{priceText}</Text>
    </View>
  )
}

export default UText