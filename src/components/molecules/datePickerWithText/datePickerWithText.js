import { View, Text } from 'react-native'
import React from 'react'
import DatePickerButton from '../../atoms/dataPickerButton/datePickerButton'
import DateText from '../../atoms/dateText/dateText'

const DatePickerWithText = ({onPress,dateText ,monthText, dayText}) => {
  return (
    <View>
      <DatePickerButton onPress={onPress}/>
      <DateText dateText={dateText} monthText={monthText} dayText={dayText}/>
    </View>
  )
}

export default DatePickerWithText