import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import HomeBody from "../components/HomeBody";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeBody />
    </>
  );
}

export default Home;
