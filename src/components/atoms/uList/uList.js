import { View, Text } from 'react-native'
import React from 'react'
import { Style } from './style'

const UList = ({ dayName, dayNumber, monthName, dailyWorkCount }) => {
  return (
    <View style={Style.viewStyle}>
      <View style={Style.countViewStyle}>
        <Text style={Style.countTextStyle}>{dailyWorkCount}</Text>
      </View>
      <View style={Style.datesViewStyle}>
        <Text style={Style.textStyle}>{dayNumber} </Text>
        <Text style={Style.textStyle}>{monthName} </Text>
        <Text style={Style.textStyle}>{dayName}</Text>
      </View>
    </View>
  )
}

export default UList