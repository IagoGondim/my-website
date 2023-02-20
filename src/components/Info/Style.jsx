import styled, { keyframes } from "styled-components";

const moveTopAnimation = keyframes`
  0%{
    opacity: 0;
    filter: blur(3px);
    transform: translateY(100px)
  }
  100%{
    opacity: 1;
    transform: translateY(0)
  }
  `;

const float = keyframes`
  
  0% {
		transform: translatey(0px);
  }
  50% {
		transform: translatey(-20px);
  }
  100% {
		transform: translatey(0px);
  }
`;

const moveBottomAnimation = keyframes`
  0%{
    opacity: 1;

  }
  100%{
    filter: blur(3px);
    opacity: 0;

  }
  `;

export const InfoContainer = styled.div`
  color: #fff;
  background: #120e28;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 80vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #120e28;
  opacity: 0.8;
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 80vh;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  &.animateHabilitiesIsVisible {
    animation-duration: 800ms;
    animation-name: ${moveTopAnimation};
    animation-timing-function: ease-in-out;
    animation-play-state: initial;
  }

  &.animateHabilitiesNotIsVisible {
    animation-duration: 800ms;
    animation-name: ${moveBottomAnimation};
    animation-timing-function: ease-in-out;
    animation-play-state: initial;
    opacity: 0;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  animation: ${moveTopAnimation} 1500ms ease-in-out;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  z-index: 1;
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  } ;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  background-image: linear-gradient(120deg, #3788b6, #c364fa);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  width: 200px;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-transform: uppercase;
  font-family: "Work Sans", sans-serif;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  font-family: "Work Sans", sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.125rem;
  line-height: 24px;
  color: #f7f8fa;
  font-family: "Roboto Mono", monospace;
`;

export const A = styled.a`
  list-style: none;
  text-decoration: none;
  color: #ffffff;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  animation: ${float} 6000ms ease-in-out infinite;
  transform: translatey(0px);
`;
