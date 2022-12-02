import styled from "styled-components";

export default function ItemCarrinho({produto, carrinho, setCarrinho}) {
  return (
    <ContainerItemCarrinho key={produto.id}>
      <img src={produto.imagem} alt={produto.nome} />
      <div>
        <span>{produto.nome}</span>
        <span>{produto.valor}</span>
      </div>
      <button onClick={() => {
        const novoCarrinho = carrinho.filter(p => p.id !== produto.id)
        setCarrinho(novoCarrinho)
      }} >X</button>
    </ContainerItemCarrinho>
  )
}

const ContainerItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
  }
`;
