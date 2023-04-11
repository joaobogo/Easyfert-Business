import styled from 'styled-components';


const SearchInput = styled.input`
  
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 0 20px;
  font-size: 12px;
  &:focus {
    outline: none;
  }

  @media screen and (max-width:767px){
   width: 70%;
  }
`;

export default SearchInput