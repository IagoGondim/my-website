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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #120e28;
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
  letter-spacing: 1.4px;
  text-transform: uppercase;
  position: absolute;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 700px;
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  align-items: center;
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

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  @media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(#333, #333);
  transition: all 500ms;
  margin-left: 10px;

  &:hover {
    background-image: linear-gradient(#672abf, #380e74);
  }

  &:hover .img {
    width: 400px;
    height: 230px;
    opacity: 1;
  }

  &:hover .arrow {
    transform: rotate(0);
  }

  &:hover .content {
    height: 260px;
    padding: 20px;
    opacity: 1;
    transition: translateY(0);
  }
`;
export const Img = styled.img`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  transition: all 500ms;
  z-index: 2;
  position: relative;
  opacity: 0.8;
  background-size: cover;
  background-position: center;
`;
export const NameS = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 100;
  font-style: italic;
  transition: all 500ms;
  color: #f7f8fa;
`;
export const Content = styled.div`
  position: relative;
  padding: 0px 20px;
  height: 0;
  opacity: 0;
  transition: all 500ms;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  transform: translateY(30px);

`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
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
  justify-content: center;
  margin: 30px auto 0 auto;
  padding: 0.875rem 2rem;
  color: #f7f8fa;
  font-weight: 300;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 20px;
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

export const Arrow = styled.div`
  padding: 15px;
  transform: rotate(-180deg);
  transition: all 500ms;
`;
export const ArrowS = styled.div`
  font-size: 24px;
`;
