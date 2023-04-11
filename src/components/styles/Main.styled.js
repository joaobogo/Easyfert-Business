import styled from 'styled-components';
import mainphoto from '../../assets/mainphoto.jpg'

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 450px;
  padding: 0;
  justify-content: center;
background: url(${mainphoto}) no-repeat ;


button{
  width: 80%;
}


`;

export default MainContainer