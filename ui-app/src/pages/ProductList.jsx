/** Products list for usrs to explore  */
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"

const Container = styled.div`
    
`
const Title = styled.div`
    margin: 20px;
`
const FilterContainer = styled.div` 
display: flex; 
justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Yellow</Option>
                <Option>Purple</Option>
                <Option>Red</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                <Option selected>
                    Price
                </Option>
                <Option>Low to High</Option>
                <Option>High to Low</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductList
