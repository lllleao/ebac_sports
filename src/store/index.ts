import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reduces/carrinho'
import api from '../service/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMittle) => getDefaultMittle().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
