import styled from "styled-components";

const ProductContainer = styled.div`
  padding: 0;
  margin: 0;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .kittitle {
    margin: 0;
  }

  h1 {
    text-align: center;
    margin-top: -35px;
    margin-bottom: -10px;
    color: #076a58;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    margin-top: 2rem;

    h1 {
      font-size: 24px;
      margin: 2rem;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default ProductContainer;
