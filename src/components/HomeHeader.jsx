import { useState } from "react";

import "../fonts.css";
import { Link } from "react-router-dom";
import { HomeBanner, Title, SubTitle } from "./HomeStyles.jsx";

function HomeHeader() {
  return (
    <HomeBanner>
      <Title title="침하하 바로가기">
        <Link to="https://chimhaha.net" target="_blank">
          침하하
        </Link>
      </Title>
      <SubTitle>17개 국에 전보 보내기</SubTitle>
    </HomeBanner>
  );
}

export default HomeHeader;
