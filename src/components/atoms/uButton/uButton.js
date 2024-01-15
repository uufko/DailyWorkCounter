import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UButton = ({firstText, secondText="Gün", onPress}) => {
  return (
      <TouchableOpacity onPress={onPress} style={Style.touchableStyle}>
        <Text style={Style.textStyle}>{firstText}</Text>
        <Text style={Style.textStyle}>{secondText}</Text>
      </TouchableOpacity>
  )
}

export default UButton