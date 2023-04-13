import styled from 'styled-components';


const AboutPageContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


.description{
    width: 80%;
    padding: 25px;
    text-align: justify;
    display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
}

.tablesubs{
    font-size: 12px;
}

h2{
    font-family: 'Gloock', serif;
    color: #076a58;
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 10px;
}

p{
    font-family: Arial, Helvetica, sans-serif;
    color: #344e41;
}

h1{
    font-family: 'Gloock', serif;
    text-align: center;
    color: #076a58;
}
`;

export default AboutPageContainer 