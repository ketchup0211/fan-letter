import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px; /* 물결의 높이 조절 */
  fill: white;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const WaveCutImage = () => {
  return (
    <Container>
      <Image src="public/images/chim-ha-ha.png" alt="침하하 지도" />
      <WaveSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 50 C 20 75, 40 25, 60 50 S 80 75, 100 50 V100 H0 Z" />
      </WaveSvg>
    </Container>
  );
};

export default WaveCutImage;
