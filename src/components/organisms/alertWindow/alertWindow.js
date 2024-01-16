import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const AlertWindow = ({noButton,yesButton}) => {
  return (
    <View style={Style.viewStyle}>
      <Text style={Style.textStyle}>Liste temizlensin mi?</Text>
      <View style={{flexDirection:"row", gap:10}}>
        <TouchableOpacity onPress={yesButton} style={Style.touchableStyle}>
          <Text style={Style.buttonTextStyle}>Evet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={noButton} style={Style.touchableStyle}>
          <Text style={Style.buttonTextStyle}>Hayır</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AlertWindow