import { configureStore } from '@reduxjs/toolkit'
import api from '../service/api'
import produtoReducer from './reduces/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: produtoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMittle) => getDefaultMittle().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
