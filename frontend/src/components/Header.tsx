import {useState} from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";

function Header() {
    const [search, setSearch] = useState<any>()
    const [show, setShow] = useState<boolean>(false)
    let items = useSelector((state : any) => state.cartReducer)
    var newArray = items.filter((value : any) => Object.keys(value).length !== 0);

    const handleChange = (e : any) => {
        setSearch(e.target.value)
    }

    function onClose() {
        setSearch("")
        setShow(false)
    }

    return (
        <Container>
            <HeaderLogo>
                <Link to="/"><img src={"https://i.imgur.com/7I9Was5.png"} onClick={() => (setSearch(""), setShow(false))}/></Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption> 
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' value={search} onChange={handleChange}/>
                {show ? (
                    <HeaderCloseIcon>
                        <Link to="/"><CloseIcon onClick={onClose}/></Link>
                    </HeaderCloseIcon>
                ) : null}
                <HeaderSearchIcons>
                    <Link to={"/search/" + search}><SearchIcon onClick={() => (setShow(true))}/></Link>
                </HeaderSearchIcons>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, Senju</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>
    
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <Link to="/cart">
                    <HeaderOptionCart>
                            <ShoppingBasketIcon/>
                            <CartCount>{newArray.length}</CartCount>
                    </HeaderOptionCart>
                </Link>
            </HeaderNavItems>
        </Container>
    )
}


export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div`
    display: flex;
    padding-left: 9px;
    align-items: center;
`


const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
    cursor: pointer;
`

const OptionLineOne = styled.div`
    
`

const OptionLineTwo = styled.div`
    font-weight: 700;
`


const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 5px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        border: none;
    }
`

const HeaderSearchIcons = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderCloseIcon = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
`

const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOptionCart = styled.div`
    display: flex;
    margin-top: 15px;
    color: white;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`
