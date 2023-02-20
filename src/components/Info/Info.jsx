import React, { useEffect, useState, useRef } from "react";
import { Button } from "../Projects/Style";

import {
  A,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./Style";

const Info = ({ id, topLine, headline, description, img, alt }) => {
  const myRef = useRef(null);
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setMyElementIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootmargin: "0px",
    threshold: 0.5,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (myRef.current) observer.observe(myRef.current);

    return () => {
      if (myRef.current) observer.unobserve(myRef.current);
    };
  }, [myRef, options]);

  const onButtonClick = () => {
    fetch("/public/iagocv.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "iagocv.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <InfoContainer id={id} ref={myRef}>
        <InfoWrapper
          className={`${"habilitiesSection "}${
            myElementIsVisible
              ? "animateHabilitiesIsVisible"
              : "animateHabilitiesNotIsVisible"
          }`}
        >
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
              </TextWrapper>
              <Button className="bn20" onClick={onButtonClick}>
                Download CV
              </Button>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
