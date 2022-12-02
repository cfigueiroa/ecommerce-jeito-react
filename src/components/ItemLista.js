import styled from "styled-components";

export default function ItemLista({produto , carrinho, setCarrinho}) {

  return (
    <ContainerItemLista>
      <img src={produto.imagem} alt={produto.nome} />
      <div>
        <span>{produto.nome}</span>
        <span>{produto.preco}</span>
      </div>
      <button onClick={() => {
        const novoCarrinho = [...carrinho, produto]
        if (!carrinho.includes(produto)) {
        setCarrinho(novoCarrinho)
        } 
      }}>Comprar</button>
    </ContainerItemLista>
  )
}

const ContainerItemLista = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;