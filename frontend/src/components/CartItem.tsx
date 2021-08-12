import styled from 'styled-components'
import {useDispatch} from "react-redux"
import { removeCartItem } from '../redux/action'

interface Props {
    name: any | string;
    url: any | string;
    price: any | number | string;
}

function CartItem({name, url, price} : Props) {
    let dispatch = useDispatch()

    return (
        <Container>
            <ImageContainer>
                <img src={url}/>
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemPrice>
                        Price: {price}
                    </CartItemPrice>
                    <CartItemDeleteContainer
                        onClick={() => dispatch(removeCartItem(name))}
                    >Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;
`
const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow: 1;
`

const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;  
    margin-top: 4px;
    flex-direction: column;
`

const CartItemDeleteContainer = styled.div`
    margin-top: 6px;
    padding: 3px;
    width: 50px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-right: 16px;
`
