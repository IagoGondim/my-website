import styled, { keyframes } from "styled-components";

const moveTopAnimation = keyframes`
  0%{
    opacity: 0;
    filter: blur(2px);
  }
  100%{
    opacity: 1;
    transform: translateY(0)
  }
  `;
const moveBottomAnimation = keyframes`
  0%{
    opacity: 1;

  }
  100%{
    filter: blur(2px);
    opacity: 0;

  }
  `;

const moveRightAnimation = keyframes`
  0%{
    filter: blur(2px);
    transform: translateX(-100px)

  }
  100%{
    transform: translateX(0);
    opacity: 1;

  }
  `;

export const HabilitiesContainer = styled.div`
  color: #fff;
  background: #120e28;
`;

export const HabilitiesPage = styled.div`
  width: 100%;
  max-width: 80rem;
  height: 700px;
  margin-right: auto;
  margin-left: auto;

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

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 350px;
`;

export const TextHabilities = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TopLine = styled.p`
  background-image: linear-gradient(120deg, #3788b6, #c364fa);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  &:after,
  &:before {
    background-image: linear-gradient(120deg, #3788b6, #c364fa);
    content: "";
    display: inline-block;
    height: 3px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &::after {
    left: 0.5em;
    margin-right: -50%;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 450px) {
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

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.875rem;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin: 3rem 0 0 0;
  background: #252b38;
  box-shadow: 0px 1px 10px 10px rgba(195, 100, 250, 0.5);
  border-radius: 10px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 700px;
  }
  @media screen and (max-width: 450px) {
    max-width: 400px;
  }
`;

export const Img = styled.img`
  width: 90px;
  padding-right: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &.animateRight {
    animation-name: ${moveRightAnimation};
    animation-duration: 1500ms;
    animation-timing-function: ease-in-out;
  }

  &:hover {
    transform: scale(1.2);
    -webkit-filter: drop-shadow(5px 5px 5px black);
  }

  @media screen and (max-width: 768px) {
    width: 60px;
  }
  @media screen and (max-width: 450px) {
    width: 45px;
  }
`;

export const HabilitiesWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 350px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
