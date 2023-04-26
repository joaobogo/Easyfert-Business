import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-left: 195px;
  padding: 10px;

  .shipping {
    width: 250px;
    height: 40px;
  }

  img {
    width: 60px;
    height: 40px;
  }

  p {
    font-size: 12px;
    color: #076a58;
  }
  span {
    border-right: 1px solid #076a58;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;

    p {
      width: 80vw;
      text-align: center;
      margin-left: -60px;
    }

    span {
     display: none;
    }

    img {
      display: none;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default Row;
