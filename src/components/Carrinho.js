import ItemCarrinho from "./ItemCarrinho"
import styled from 'styled-components';

export default function Carrinho({ carrinho, setCarrinho }) {
    return (
        <ContainerCarrinho>
            {carrinho.map(p => 
            <ItemCarrinho 
            key={p.id} 
            produto={p} 
            carrinho={carrinho} 
            setCarrinho={setCarrinho}/>)}
        </ContainerCarrinho>
    )
}


export const ContainerCarrinho = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 100vh;
    position: absolute;
    right: 0;
`;
