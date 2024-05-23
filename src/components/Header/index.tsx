import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import {
  quantidadeFav,
  quantidadeProd,
  totalPrecos
} from '../../store/reduces/carrinho.selector'

const Header = () => {
  const quantidadeItens = useSelector(quantidadeProd)
  const totalDePrecos = useSelector(totalPrecos)
  const itensFav = useSelector(quantidadeFav)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFav} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidadeItens} itens, valor total: {paraReal(totalDePrecos)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
