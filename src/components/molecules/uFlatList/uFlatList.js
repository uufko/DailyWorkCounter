import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import UList from '../../atoms/uList/uList'

const UFlatList = ({ data }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <UList
              dayName={item._dayName}
              dayNumber={item._dayNumber}
              monthName={item._monthName}
              dailyWorkCount={item.dailyWorkCount} />
          )
        }}
      />
    </View>
  )
}

export default UFlatList