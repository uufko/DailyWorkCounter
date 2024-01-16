import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../metarials/images'
import { Style } from './style'

const UImage = ({onPress,source,bottom,top,height,width,right}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Style.viewStyle, { bottom:bottom,top:top, right:right}]}>
      <Image style={[Style.imageStyle,{height:height, width:width}]} source={source}/>
    </TouchableOpacity>
  )
}

export default UImage