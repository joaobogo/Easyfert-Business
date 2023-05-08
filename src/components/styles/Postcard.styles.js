import styled from "styled-components";

const PostCardContainer = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 100px;
    height: 100px;
  }

  h2 {
    color: #398879;
    font-weight: bold;
  }

  p {
    text-align: justify;
    color: #398879;
    padding: 10px;
  }

  .body {
    color: black;
  }

  .button {
    display: flex;
    background-color: #398879;
    color: white;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }

  .card {
    display: flex;
  }

  @media (max-width: 1250px) {
  }

  @media (max-width: 768px) {

    display: flex;
    justify-content: center;

.buttoncontainer{
   display: flex;
   justify-content: center;
   align-items: center;
  margin-bottom: 3vh;
}

h2{
    font-size: 24px;
}

    p {
      text-align: justify;
    }
  }

  @media (max-width: 320px) {
  }
`;

export default PostCardContainer;
