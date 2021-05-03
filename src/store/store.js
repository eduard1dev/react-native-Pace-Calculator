import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore, combineReducers } from 'redux'

//Configurando redux-persist
import { persistStore, persistReducer } from 'redux-persist'

import pacesHistReducer from './pacesHist/pacesHist.reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    pacesHist: persistReducer(persistConfig, pacesHistReducer)
})

export const store = createStore(rootReducer)
export const persistor = persistStore(store)