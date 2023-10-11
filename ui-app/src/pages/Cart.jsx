/**
 * Main cart page for users
 */

import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {useState } from "react";
import { Link
 } from "react-router-dom";
 import Announcements from "../components/Announcements";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-color: black;
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
// `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


function calculateTax(item) {
  const price = parseInt(item.price);
  if (item.type === 'PRODUCT') {
    if (price > 1000 && price <= 5000) {
      // Apply Tax PA: 12% of the price
      return price * 0.12;
    } else if (price > 5000) {
      // Apply Tax PB: 18% of the price
      return price * 0.18;
    } else {
      // Apply Tax PC: Flat tax amount of 200
      return 200;
    }
  } else {
    if (item.type === 'SERVICE'){
      if (item.price > 1000 && item.price <= 8000) {
        // Apply Tax SA: 10% of the price
        return item.price * 0.1;
      } else if (item.price > 8000) {
        // Apply Tax SB: 15% of the price
        return item.price * 0.15;
      } else {
        // Apply Tax SC: Flat tax amount of 100
        return 100;
      }
    }
    return 1;
  }
}

/**
 * Cart page component hosting pricing logic as well
 * @param {*} param0 
 * @returns 
 */
const Cart = ({ cartItems = [] }) => {
  const items = cartItems.map(item => ({...item, tax: calculateTax(item)}));
  const subTotal = items.reduce((prevValue, currentValue) => parseInt(currentValue.price) + prevValue, 0);
  const taxes = items.reduce((prevValue, currentValue) => parseInt(currentValue.tax) + prevValue, 0);
  const total = subTotal + taxes;

  return (
    <Container>
      <Announcements/>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton><Link to = '/'><b>CONTINUE SHOPPING</b></Link></TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {items.map((item, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={item.imageUrl} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.name}
                    </ProductName>
                    <ProductId>
                      <b>Id:</b> {item.id}
                    </ProductId>
                    {item.color && <ProductColor color={item.color} />}
                    {item.size && <ProductSize>
                      <b>Size:</b> {item.size}
                    </ProductSize>
                    }
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    {/* TODO: Add Remove button component */}
                  </ProductAmountContainer>
                  <ProductPrice>
                    Cost: {item.price}
                  </ProductPrice>
                  <ProductPrice>
                    Tax: {item.tax}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {subTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax</SummaryItemText>
              <SummaryItemPrice>$ {taxes}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> $ {total}</SummaryItemPrice>
            </SummaryItem>
            <Button>PLACE ORDER</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;