import { View } from 'react-native'
import React from 'react'
import MainPage from './src/components/pages/mainPage/mainPage'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'


const App = () => {
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <MainPage/>
    </View>
    </Provider>
  )
}

export default App