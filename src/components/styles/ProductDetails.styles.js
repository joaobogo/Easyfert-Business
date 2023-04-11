import styled from 'styled-components';


const ProductDetailsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 50px;

.fretep{
text-align: center;

}

.shippingbutton{
    width: 120px;
    background-color: #076a58;
    color: white;
    border-radius: 10px;
    border: #febc30 3px solid;
}

.shippingbutton:hover{
    background-color: #51978a;
    cursor: pointer;
    transition: .3s;
}

.shippinginput{
    display: flex;
    justify-content: center;
}

.buttoncontainer{
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
}

.leftmenu img{
transform: scale(.7);
}

.addedprod{
    width: 355px;
    text-align: center;
    font-size: 18px;
    color: #076a58;
}
.rightcolumn{
display: flex;
flex-direction: column;
}

section{
display: flex;
padding: 25px;
justify-content: space-evenly;
}

.pricetag{
font-family: Arial, Helvetica, sans-serif;
font-size: 24px;
}

.description{
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
}

.rightmenu{
    border:solid 1px;
    border-color: #344e41;
    width: 30%;
    text-align: left;
    padding: 15px;
    
}

.rightmenu .buybutton{
    width: 100%;
    height: 50px;
    font-size: 16px;
    background-color: #076a58;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: #febc30 3px solid;
    
}

.rightmenu .buybutton:hover{
    background-color: #51978a;
    cursor: pointer;
    transition: .3s;
}

`;

export default ProductDetailsContainer