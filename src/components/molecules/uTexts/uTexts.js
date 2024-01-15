import { View, Text } from 'react-native'
import React from 'react'
import UText from '../../atoms/uText/uText'

const UTexts = ({priceText,countText}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center" , backgroundColor:"yellow"}}>
      <UText priceText={`${priceText} TL`}/>
      <UText priceText={`${countText} Gün`}/>
    </View>
  )
}

export default UTexts