import Produto from '../components/Produto'

import * as S from './styles'
import { useGetProdutosQuery } from '../service/api'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <S.Spinner />
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
