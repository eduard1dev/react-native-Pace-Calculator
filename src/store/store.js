import { createStore, combineReducers } from 'redux'
import pacesHistReducer from './pacesHist/pacesHist.reducer'

const rootReducer = combineReducers({
    pacesHist: pacesHistReducer
})

const store = createStore(rootReducer)

export default store