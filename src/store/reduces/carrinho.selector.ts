import { RootReducer } from '..'
import { Produto } from '../../App'

export const quantidadeProd = (root: RootReducer) => root.carrinho.itens.length
export const totalPrecos = (root: RootReducer) =>
  root.carrinho.itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const quantidadeFav = (root: RootReducer) =>
  root.carrinho.itensFav.length
export const estaNosFav = (fav: number[], id: number) =>
  fav.some((item) => item === id)

export const estaNoCar = (prod: Produto[], id: number) =>
  prod.some((item) => item.id === id)
