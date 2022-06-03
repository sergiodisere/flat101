import { productReducer } from './reducers/productsReducer'
import {createStore, combineReducers} from 'redux'

const reducer = combineReducers({
  products: productReducer
})

export const store = createStore(reducer)

