import Slider from "react-slick";
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

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #120e28;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Heading = styled.h2`
  width: 100%;
  font-size: 2rem;
  background-image: linear-gradient(120deg, #3788b6, #c364fa);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: start;
  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 1rem 0;

  .left {
    margin-right: 5rem;
  }
  .right {
    margin-left: 5rem;
  }

  & svg {
    margin: 0 1rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
  & svg:hover {
    scale: 1.2;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;
  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }
  .slick-list {
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  border: none;
  outline: none;
  min-height: 430px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-image: linear-gradient(#672abf, #380e74);
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  min-height: 201px;
`;

export const NameS = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 100;
  font-style: italic;
  transition: all 500ms;
  color: #f7f8fa;
`;

export const DescriptionP = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: 100;
  opacity: 0.8;
  margin-top: 8px;
  color: #f7f8fa;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto 1rem auto;
  padding: 0.5rem 1.5rem;
  color: #f7f8fa;
  font-weight: 300;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 10px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &.bn20 {
    background-image: linear-gradient(
      to right,
      #3788b6,
      #c364fa,
      #3788b6,
      #c364fa
    );
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  }
`;
