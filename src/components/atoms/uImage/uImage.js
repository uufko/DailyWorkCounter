import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../../metarials/images'
import { Style } from './style'

const UImage = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.viewStyle}>
      <Image style={Style.imageStyle} source={Images.deleteIcon}/>
    </TouchableOpacity>
  )
}

export default UImage