import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'

const DateText = ({dateText,monthText,dayText}) => {
  return (
    <View style={Style.viewStyle}>
      <Text style={Style.textStyle}>{dateText} {monthText} {dayText}</Text>
    </View>
  )
}

export default DateText