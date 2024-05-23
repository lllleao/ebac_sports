import { configureStore } from '@reduxjs/toolkit'
import api from '../service/api'
import carrinhoReducer from './reduces/carrinho'
import favoritosReduce from './reduces/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,
    favoritar: favoritosReduce
  },
  middleware: (getDefaultMittle) => getDefaultMittle().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
