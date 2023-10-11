/**
 * Services item component to style services on the home page
 */
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Head = styled.div`
  position: center;
  color: black;
  font-size: 50;
`
const Title = styled.h1`
    color:black;
    margin-bottom: 400px;
`;

const Paragraph = styled.div`
color: black;
  display: flex;
  position: absolute;
  margin-bottom: 70px;
  margin-left: 30px;
`
const Cost = styled.h1`
    color:black;
    margin-bottom: 30px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-color: black;
`

const ServicesItems = ({ item, setCartItems }) => {

  const handleAddToCart = () => {
    // Create a new cart item based on the 'item' and add it to the cartItems state
    const newItem = {
      id: item.id,
      name: item.heading,
      price: item.cost,
      type: item.type
    };

    // Update the cart items by calling setCartItems with the new item
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };

  return (
    <Container>
      <Info>
        <Head>Services</Head>
        <Title>{item.heading}</Title>
        <Paragraph>{item.parag}</Paragraph>
        <Cost>{item.cost}</Cost>
        <Button onClick={handleAddToCart}>BUY NOW</Button>
      </Info>
    </Container>
  );
};


export default ServicesItems;