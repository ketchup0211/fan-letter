import { useState } from "react";
import styled from "styled-components";
import "../fonts.css";
import { useNavigate, useParams } from "react-router-dom";
const MAIN_COLOR = "#f6ebe2";
import DetailHeader from "../components/DetailHeader";
import DetailBody from "../components/DetailBody";
import goHome from "../components/modules/goHome";
import getLocalData from "../components/modules/getLocalData";
/*
 *  Main Component
 */
function Detail() {
  const params = useParams();

  // Data Check
  const parsedData = getLocalData(params.receiver);
  if (!parsedData) {
    console.log("No Data");
    return;
  } else {
    const { sender, message, creationTime } = parsedData.filter(
      (e) => e.id === params.id
    )[0];
  }

  //  Main
  return (
    <>
      <DetailHeader
        sender={sender}
        receiver={params.receiver}
        goHome={goHome}
      />
      <DetailBody params={params} sender={sender} message={message} />
    </>
  );
}

export default Detail;
