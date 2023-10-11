import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

/**
 * Categories component for users to explore various categories of products directly
 */
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

/**
 * mapping of categories to mock database to fetch items
 * @returns 
 */
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;