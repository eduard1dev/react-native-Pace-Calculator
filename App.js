import React from 'react'
import {View, Text, Button} from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store/store'

import Routes from './src/router'


export default function App(){

  return(
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}

