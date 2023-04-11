import styled from 'styled-components';


const CartItemsContainer = styled.div`
  
width: 50%;
display: flex;
justify-content: space-evenly;
align-items: center;


.delete{
border-radius: 50%;
border-color: transparent;
color: white;
background-color: red;
font-size: 8px;
}

.delete:hover{
  transform: scale(1.2);
  cursor: pointer;
}

img{
    width: 100px;
}
  

  
`;

export default CartItemsContainer 