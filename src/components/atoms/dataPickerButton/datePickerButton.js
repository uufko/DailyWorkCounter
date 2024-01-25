import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const DatePickerButton = ({onPress}) => {
  return (
    <View style={Style.viewStyle}>
      <TouchableOpacity style={Style.touchableStyle} onPress={onPress}>
    <Text style={Style.textStyle}>Tarih Seç</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DatePickerButton