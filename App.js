import React from 'react'
import { Provider } from 'react-redux'

import { store, persistor} from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './src/router'

import { useFonts, Roboto_400Regular, Roboto_300Light } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

export default function App(){
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_300Light,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes/>
      </PersistGate>
    </Provider>
  )
}

