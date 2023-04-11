import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin: 10px;

  img {
    width: 60px;
    height: 40px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #344e41;
  }
  span {
    border-right: 1px solid #344e41;
  }
`;

export default Row;
