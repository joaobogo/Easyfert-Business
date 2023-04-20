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
  color: #076a58;
  font-weight: bolder;
}

.media{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
}

a{
  transform: scale(1.3);
  color: #076a58;
}

a:hover{
  color: #febc30 ;
}

  p{
    color: #076a58;
    margin: 3px;
    font-weight: bolder;
  }

  img{
    transform: scale(1.3);
    margin-top: -25px;
  }


`;

export default Column