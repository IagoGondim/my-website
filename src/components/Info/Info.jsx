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
              <Button className="bn20">
                <A href="/iagocv.pdf" target="_blank" download>
                  Download CV
                </A>
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
