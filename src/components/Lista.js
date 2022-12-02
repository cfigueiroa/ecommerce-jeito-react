import ItemLista from "./ItemLista"
import styled from "styled-components"
import PRODUTOS from '../PRODUTOS';

export default function Lista({ carrinho, setCarrinho }) {
    return (
        <ContainerLista>
            {PRODUTOS.map(p =>
                <ItemLista
                    key={p.id}
                    produto={p}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho} />)}
        </ContainerLista>
    )
}

export const ContainerLista = styled.div`
    display: flex;
    flex-wrap: wrap;
`