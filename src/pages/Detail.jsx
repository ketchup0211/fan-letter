import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "../components/DetailHeader";
import DetailBody from "../components/DetailBody";
import getLocalData from "../components/modules/getLocalData";
import { DataContext, ModifyContext } from "../context/DetailContext";

function Detail() {
  const params = useParams();

  // Data Check
  const parsedData = getLocalData(params.receiver);
  const { sender, message } = parsedData.filter((e) => e.id === params.id)[0];

  let value = {
    sender: sender,
    receiver: params.receiver,
    message: message,
    id: params.id,
  };

  //  Main
  return (
    <DataContext.Provider value={value}>
      <DetailHeader />
      <DetailBody />
    </DataContext.Provider>
  );
}

export default Detail;
