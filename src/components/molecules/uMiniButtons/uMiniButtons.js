import { View, Text, FlatList } from 'react-native'
import React from 'react'
import UMiniButton from '../../atoms/uMiniButton/uMiniButton'
import { Style } from './style'
import { Dates } from '../../metarials/dates'

const UMiniButtons = ({onPress,data,itemState }) => {
  return (
    <View style={Style.viewStyle}>
      <FlatList
        data={data}
        renderItem={({ itemState }) => {
          return (
            <UMiniButton onPress={onPress} buttonText={item} />
          )
        }} />
    </View>
  )
}

export default UMiniButtons