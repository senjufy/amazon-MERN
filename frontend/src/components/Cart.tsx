import CartItem from "./CartItem";
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { emptyCart } from "../redux/action";

function Cart() {
    let items = useSelector((state : any) => state.cartReducer)
    let newArray = items.filter((value : any) => Object.keys(value).length !== 0);
    let numbers : any = [] 
    newArray.map((data : any) => (
        numbers.push(data.price)
    ))
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {  sum += numbers[i]}
    
    let dispatch = useDispatch()

    function empty() {
        dispatch(emptyCart())
    }

    return (
        <div>
            {newArray.length > 0 ?
                <Container>
                    <Items>
                        {newArray.map((data: any) => (
                            <CartItem key={data.id} name={data.name} price={data.price} url={data.url}/>
                        ))}
                    </Items>
                    <TotalPrice>
                        <Total>
                            Total: ${sum}
                        </Total>
                        Please proceed to checkout.
                        <Link to="/checkout"
                            style={{textDecoration:"none"}}
                        >
                            <CheckOutButton
                                onClick={empty}
                            >Check Out</CheckOutButton>
                        </Link>
                    </TotalPrice>
                </Container> 
                :
                <Empty>Cart Empty</Empty>}
        </div>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    border: 2px solid #a88734;
    border-radius: 2px;
`
const TotalPrice = styled.div`
    margin-left: 600px;
    margin-top: 80px;
    height: 98px;
    padding: 15px;
    border: 2px solid #a88734;
    border-radius: 2px;
`
const Total = styled.div`
    font-size: 27px;
    font-weight: 700;
`
const Items = styled.div`
    margin-left: 20px;
`
const CheckOutButton= styled.div`
    margin-top: 12px;
    padding: 3px;
    width: 80px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
const Empty = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 260px;
`