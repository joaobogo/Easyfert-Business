import styled from 'styled-components';

const Column = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: center;
  width: 200px;
  text-align: center;
  margin: 5px auto auto;

h3{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff2d6;
}


a{
  transform: scale(1.3);
  color: #fff2d6;
}

a:hover{
  color: #febc30 ;
}

  p{
    color: #fff2d6;
    margin: 3px;
  }

  img{
    transform: scale(1.3);
    margin-top: -25px;
  }


`;

export default Column