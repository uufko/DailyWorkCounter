import { View, Text } from 'react-native'
import React from 'react'
import UText from '../../atoms/uText/uText'

const UTexts = ({priceText,countText}) => {
  return (
    <View>
      <UText priceText={`${priceText} TL`}/>
      <UText priceText={`${countText} Gün`}/>
    </View>
  )
}

export default UTexts