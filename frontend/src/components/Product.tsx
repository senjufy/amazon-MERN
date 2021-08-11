import styled from 'styled-components'
import {addCart} from "../redux/action"
import {useDispatch} from 'react-redux'

interface Props {
    name: any | string;
    url: any | string;
    price: any | number | string;
}


function Product({name, url, price} : Props) {
    let dispatch = useDispatch()

    function addToCart() {
        dispatch(addCart({
            name: name,
        }))
    }

    return (
        <Container>
            <Title>
                {name}
            </Title>

            <Price>
                ${price}
            </Price>

            <Image src={url}/>

            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add To Cart
                </AddToCartButton>
            </ActionSection>
            
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    min-height: 200px;
    max-width:180px;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

const Title = styled.span``


const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Image = styled.img `
    max-height: 200px;
    object-fit: contain;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`
