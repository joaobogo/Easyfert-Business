import styled from "styled-components";

const ProductContainer = styled.div`
  padding: 0;
  margin: 0;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  

  h1 {
    text-align: center;
    margin-bottom: -25px;
    color: #076a58;
  }

  @media (max-width: 1250px) {
    
  }

  @media (max-width: 768px) {

    h1{
      font-size: 24px;
    }

  }

  @media (max-width: 320px) {
  }

`;

export default ProductContainer;
