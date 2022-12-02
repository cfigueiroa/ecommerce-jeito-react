import Lista from './components/Lista';
import Carrinho from './components/Carrinho';
import PRODUTOS from './PRODUTOS';
import { useState } from "react";
import styled from 'styled-components';

function App() {
  const lista = PRODUTOS;
  const [carrinho, setCarrinho] = useState([]);
  return (
    <ContainerApp>
      <Lista lista={lista} carrinho={carrinho} setCarrinho={setCarrinho}/>
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
    </ContainerApp>
  );
}

export default App;

export const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;
