import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'
import UImage from '../uImage/uImage'
import { Images } from '../../metarials/images'

const UList = ({ dayName, dayNumber, monthName, dailyWorkCount, visible,onPress }) => {
  return (
    <View style={Style.viewStyle}>
      <View style={Style.countViewStyle}>
        <Text style={Style.countTextStyle}>{dailyWorkCount}</Text>
      </View>
      <View style={Style.lineStyle}></View>
      <TouchableOpacity onPress={onPress} style={Style.datesViewStyle}>
        <Text style={Style.textStyle}>{dayNumber} </Text>
        <Text style={Style.textStyle}>{monthName} </Text>
        <Text style={Style.textStyle}>{dayName}</Text>
      </TouchableOpacity>
      {visible && <TouchableOpacity  style={{ 
        flex:1, justifyContent:"center", alignItems:"center",
      }}>
        <UImage state={false} source={Images.removeIcon} height={25} width={25}/>
      </TouchableOpacity>}
    </View>
  )
}

export default UList