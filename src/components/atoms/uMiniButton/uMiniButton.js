import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UMiniButton = ({buttonText,onPress}) => {
  return (
    <View>
      <TouchableOpacity style={Style.touchableStyle} onPress={onPress}>
        <Text style={Style.textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UMiniButton