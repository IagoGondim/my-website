import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  BannerContainer,
  BannerBg,
  VideoBg,
  BannerContent,
  BannerH1,
  BannerP,
} from "./Style";
import Video from "../../videos/video.mp4";

const Banner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <BannerContainer id="banner">
      <BannerBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </BannerBg>
      <BannerContent>
        <BannerH1>Olá, meu nome é Iago Gondim</BannerH1>
        <BannerP>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Sou desenvolvedor e esse é o meu portfolio."],
            }}
          />
        </BannerP>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
