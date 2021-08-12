import styled from 'styled-components'
import {Link} from "react-router-dom";

function CheckOut() {
    return (
        <Container>
            <Order>Order Complete! Your Items Will Be Delivered Soon</Order>
            <Link to="/"
                style={{textDecoration:"none"}}
            >
                <Home>Go Home</Home>
            </Link>
        </Container>
    )
}

export default CheckOut

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Order = styled.h1`
    margin-top: 220px;
`
const Home= styled.div`
    margin-top: 12px;
    padding: 3px;
    width: 70px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
