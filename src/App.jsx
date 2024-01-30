import { useState } from "react";
import chimMap from "./assets/chim-ha-ha.png";
import styled from "styled-components";

const StBanner = styled.div`
  background-image: url("./assets/chim-ha-ha.png");
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <StBanner />
    </>
  );
}

export default App;
