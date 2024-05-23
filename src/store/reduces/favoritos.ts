// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { Produto } from '../../App'

// type FavoritoState = {
//   itens: Produto[]
// }

// const initialState: FavoritoState = {
//   itens: []
// }

// const favoritosSlice = createSlice({
//   name: 'favoritos',
//   initialState,
//   reducers: {
//     favoritar: (state, action: PayloadAction<Produto>) => {
//       const favorito = action.payload

//       if (state.itens.find((p) => p.id === favorito.id)) {
//         state.itens = state.itens.filter((p) => p.id !== favorito.id)
//       } else {
//         state.itens = [...state.itens, favorito]
//       }
//     }
//   }
// })

// export const { favoritar } = favoritosSlice.actions
// export default favoritosSlice.reducer
export {}
