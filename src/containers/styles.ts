import styled from 'styled-components'

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Spinner = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  border: 3px solid;
  border-color: red #000 #000 #000;
  animation: rotate 1s infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
