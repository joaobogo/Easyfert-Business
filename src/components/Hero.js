import MainContainer from "./styles/Main.styled";

import React from "react";
import ButtonContainer from "./styles/Buttonmain.styled";
import { Link } from "react-router-dom";
import mainphoto1 from "../assets/mainphoto1.jpg";
import mainphoto2 from "../assets/mainphoto2.jpg";
import mainphoto3 from "../assets/mainphoto3.jpg";
import { useState } from "react";
import { useEffect } from "react";

const banners = [
  {
    bgimage: mainphoto1,
    text: "Clique aqui para ver os nossos kits",
  },
  {
    bgimage: mainphoto2,
    text: "Mais sobre a Remo Nutrients",
  },
  {
    bgimage: mainphoto3,
    text: "Crie aqui para criar sua conta",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  const changeBanner = () => {
    setIndex((prevIndex) => {
      if (prevIndex >= banners.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevBanner = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return banners.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(changeBanner, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainContainer bgimage={banners[index].bgimage}>
      
    
        <button className="leftbutton" onClick={prevBanner}>
          {"<"}
        </button>
        <button className="rightbutton" onClick={changeBanner}>
          {">"}
        </button>
      

      <ButtonContainer>
        <Link className="button" to="/about">
          {banners[index].text}
        </Link>
      </ButtonContainer>

    </MainContainer>
  );
}

export default Hero;
