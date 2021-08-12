import { useEffect, useState, useRef} from 'react'
import styled from "styled-components";
import Product from './Product';
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'

import {
    RouteComponentProps
} from "react-router-dom";
import { addSearchItem } from '../redux/action';
type TParams = { param: string };

function SearchRes({ match } : RouteComponentProps<TParams>) {
    let dispatch = useDispatch()
    let items = useSelector((state : any) => state.searchReducer)
    const [search, setSearch] = useState([])
    const mountedRef = useRef(false)  
    const [value, setValue] = useState(false);
    let param = match.params.param

    async function find(query:any, page = 0) {
        const url = `http://localhost:5000/api/v1/products?name=${query}&page=${page}`
        await axios.get(url).then((res : any) => {
            setSearch(res.data.products)
        })

        if(items.length < 21) {
            search.map ((value : any) => (
                dispatch(addSearchItem({
                    name: value.name,
                    url : value.url,
                    price : value.price,
                }))
            ))
        }
        
    }

    useEffect(() => {
        console.log("rendered")
        mountedRef.current = true
        find(param)
        setTimeout(setValue, 1000, true)
    }, [value])

    var newArray = items.filter((value : any) => Object.keys(value).length !== 0);

    return (
        <div>
            <Container>
                <Banner>

                </Banner>

                <Content>
                    {newArray.map((data: any) => (
                        <Product key={data._id} name={data.name} price={data.price} url={data.url}/>
                    ))}
                </Content>
            </Container>
        </div>
    )
}

export default SearchRes


const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 13px;
`