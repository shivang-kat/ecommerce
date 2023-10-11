/**
 * Component to fetch all products
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Products = ({ setCartItems }) => {
  // To link product list with the NodeJS API
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost/api/products').then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  return (
    <Container>
        {popularProducts.map(item => (
            <Product item = {item} key = {item.id} setCartItems={setCartItems} />
        ))}
    </Container>
  )
}

export default Products
