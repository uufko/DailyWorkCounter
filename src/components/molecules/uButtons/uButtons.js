import { View, Text } from 'react-native'
import React from 'react'
import UButton from '../../atoms/uButton/uButton'
import { Style } from './style'

const UButtons = ({ onPressFirstButton, onPressSecondButton, firstText = "Tam", secondText = "Yarım" }) => {
  return (
    <View style={Style.viewStyle}>
      <UButton firstText={firstText} onPress={onPressFirstButton} />
      <UButton firstText={secondText} onPress={onPressSecondButton} />
    </View>
  )
}

export default UButtons