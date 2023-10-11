/** 
 * Services component to fetch all services 
 */
import styled from "styled-components";
import { servicecategories } from "../data";
import ServicesItems from "./ServicesItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Services = ({ setCartItems }) => {
  return (
    <Container>
      {servicecategories.map((item) => (
        <ServicesItems item={item} key={item.id} setCartItems={setCartItems} />
      ))}
    </Container>
  );
};

export default Services;