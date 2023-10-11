/**
 * Navbar for usrs to navigate through the website
 */
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    height: 80px;
    position: fixed;
    z-index: 100;
    background-color: white;
    width: 100%;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`

const Centre = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`
const Right= styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 13px;
    cursor: pointer;
    margin: 25px;
`
/**
 * Using different variables to define structure
 * @param {*} param0 
 * @returns 
 */
const Navbar = ({cartItemsQuantity = 0}) => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Centre>
                <Logo>SHOPPERS</Logo>
            </Centre>
            <Right>
                <MenuItem>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/products">Products</Link>
                </MenuItem>
                <MenuItem><Link to = {'/register'}>Register Now</Link></MenuItem>
                <MenuItem>
                    <Link to="/cart">
                        <Badge badgeContent={cartItemsQuantity} color="primary">
                            <ShoppingCartOutlined/> 
                        </Badge>
                    </Link>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
