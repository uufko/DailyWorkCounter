import { View, Text } from 'react-native'
import React from 'react'
import UText from '../../atoms/uText/uText'
import { Colors } from '../../metarials/colors'
import { ULine } from '../../atoms/uLine/uLine'

const UTexts = ({priceText,countText}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center" , backgroundColor:Colors.headerColor, margin:10}}>
      <UText priceText={`${priceText} TL`}/>
      <ULine/>
      <UText borderBottomWidth={0} priceText={`${countText} Gün`}/>
    </View>
  )
}

export default UTexts