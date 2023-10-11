import styled from "styled-components"

/**
 * Announcement bar to show offers
 */
const Container = styled.div`
    height: 30px;
    background-color: #807300;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    /* position: fixed; */

`
const Announcements = () => {
  return (
    <Container>
        Get Free Shipping on Orders Above $500 !
    </Container>
  )
}

export default Announcements
