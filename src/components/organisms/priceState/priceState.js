import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const PriceState = ({onPress}) => {
  return (
    <View style={Style.viewStyle}>
      <TextInput keyboardType='numeric' placeholder='Değer Giriniz' placeholderTextColor={"white"} style={{borderWidth:0}}/>
      <TouchableOpacity onPress={onPress} style={Style.touchableStyle}>
        <Text style={Style.buttonTextStyle}>Tamam</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PriceState