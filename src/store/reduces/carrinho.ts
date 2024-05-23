import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  itensFav: number[]
}

const initialState: CarrinhoState = {
  itens: [],
  itensFav: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        // state.itens.push(produto)
        state.itens = [...state.itens, produto]
      }
    },
    favoritar: (state, action: PayloadAction<number>) => {
      const favorito = action.payload

      if (state.itensFav.find((id) => id === favorito)) {
        state.itensFav = state.itensFav.filter((id) => id !== favorito)
      } else {
        state.itensFav = [...state.itensFav, favorito]
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
