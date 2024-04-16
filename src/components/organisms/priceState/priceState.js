import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import { Colors } from '../../metarials/colors'

const PriceState = ({ onPress,value,onChange }) => {
  return (
    <View style={Style.viewStyle}>
      <Text style={Style.textStyle}>Günlük Çalışma Ücreti</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        maxLength={4}
        textAlign='center'
        keyboardType='numeric'
        placeholder='Değer Giriniz'
        placeholderTextColor={Colors.lightTextColor}
        style={Style.textInputStyle} />
      <TouchableOpacity
        onPress={onPress}
        style={Style.touchableStyle}>
        <Text style={Style.buttonTextStyle}>Tamam</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PriceState