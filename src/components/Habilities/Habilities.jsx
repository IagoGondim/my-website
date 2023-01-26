import React, { useEffect, useRef, useState } from "react";

import {
  Heading,
  Img,
  ImgWrap,
  HabilitiesContainer,
  Subtitle,
  TextWrapper,
  TopLine,
  HabilitiesWrapper,
  TextHabilities,
  HabilitiesPage,
} from "./Style";
import { Data, HabilitiesImg } from "./Data";

const Habilities = () => {
  const [data, setData] = useState(Data.data);
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

  function changePhoto(id) {
    const arrayTeste = data.map((event) => {
      if (event.id === id) {
        event.visible = true;
      } else {
        event.visible = false;
      }
      return event;
    });
    setData(arrayTeste);
  }

  return (
    <HabilitiesContainer id="habilities" ref={myRef}>
      <HabilitiesPage
        className={`${"habilitiesSection "}${
          myElementIsVisible
            ? "animateHabilitiesIsVisible"
            : "animateHabilitiesNotIsVisible"
        }`}
      >
        <HabilitiesWrapper>
          <TopLine className="line">Habilidades</TopLine>
          <ImgWrap>
            {HabilitiesImg.map((photo) => {
              return (
                <>
                  <Img
                    className={`${"box "}${
                      myElementIsVisible ? "animateRight" : ""
                    }`}
                    src={photo.img}
                    alt={photo.alt}
                    onClick={() => changePhoto(photo.id)}
                  />
                </>
              );
            })}
          </ImgWrap>
        </HabilitiesWrapper>
        <TextWrapper>
          {data.map((text) => {
            return (
              <>
                <TextHabilities>
                  <Heading>{text.visible && text.headline}</Heading>
                  <Subtitle>{text.visible && text.description}</Subtitle>
                </TextHabilities>
              </>
            );
          })}
        </TextWrapper>
      </HabilitiesPage>
    </HabilitiesContainer>
  );
};

export default Habilities;
