import React, {useContext} from 'react';
import CartContext from '../../context/cart';
import { Container, ContainerList, TravelItem, Total, Info, Quantity, Subtotal, ContainerTotal } from './styles';
import { MdDelete } from 'react-icons/md';

function Cart() {
    const {state, setState} = useContext(CartContext);
    const ObtenerTotal = state.cart.reduce ((accumulator, {price,quantity}) =>
    accumulator + (price*quantity),0)
    ;

    return(
        <Container>
            <ContainerList>
                {state.cart.map((el)=>(
                    <TravelItem>
                    <img src={el.photo} alt={el.title} />
                    <Info>
                        <p>{el.title}</p>
                        <strong>{el.price}</strong>
                    </Info>
                    <Quantity readOnly type= 'number' value={el.quantity} />
                    <Subtotal>
                        <p>{el.quantity * el.price}</p>
                        <button type='button' >
                            <MdDelete size={24} color="#0676d9"/>
                        </button>
                    </Subtotal>                 
                </TravelItem>
                ))}
                <Total>
                    <ContainerTotal>
                        <p>Total: $ {ObtenerTotal}</p>
                    </ContainerTotal>
                </Total>         
                </ContainerList>
        </Container>
    )
}

export default Cart;