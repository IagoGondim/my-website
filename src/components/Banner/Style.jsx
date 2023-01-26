import styled from "styled-components";

export const BannerContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const BannerBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const BannerContent = styled.div`
  z-index: 3;
  max-width: 80rem;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerH1 = styled.h1`
  color: #f7f8fa;
  font-size: 3rem;
  text-align: center;
  transition: all 200ms ease-in-out;


  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const BannerP = styled.span`
  margin-top: 1.5rem;
  color: #f7f8fa;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.125rem;
  }
`;
