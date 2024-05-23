import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar, favoritar } from '../../store/reduces/carrinho'
import { RootReducer } from '../../store'
import { estaNoCar, estaNosFav } from '../../store/reduces/carrinho.selector'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favorita = () => dispatch(favoritar(produto.id))
  const adiciona = () => dispatch(adicionar(produto))

  const eFavorito = useSelector((state: RootReducer) =>
    estaNosFav(state.carrinho.itensFav, produto.id)
  )

  const noCar = useSelector((state: RootReducer) =>
    estaNoCar(state.carrinho.itens, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favorita} type="button">
        {eFavorito ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adiciona} type="button">
        {noCar ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
