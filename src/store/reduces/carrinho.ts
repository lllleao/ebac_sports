import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
        // state.itens = [...state.itens, produto]
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.itens.find((p) => p.id === favorito.id)) {
        state.itens = state.itens.filter((p) => p.id !== favorito.id)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
