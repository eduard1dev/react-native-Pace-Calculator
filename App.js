import React from 'react'
import { Provider } from 'react-redux'

import { store, persistor} from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './src/router'


export default function App(){

  return(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes/>
      </PersistGate>
    </Provider>
  )
}

