import { createStore, combineReducers } from 'redux'
import pacesHistReducer from './pacesHist/pacesHist.reducer'

//Configurando redux-persist
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['paces']
}

const rootReducer = combineReducers({
    pacesHist: persistReducer(persistConfig, pacesHistReducer)
})

export const store = createStore(rootReducer)
export const persistor = persistStore(store)