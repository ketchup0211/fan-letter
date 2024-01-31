import { useState } from "react";

function getLocalData(target) {
  let data = localStorage.getItem(target);
  let parsedData = data ? JSON.parse(data) : false;
  return parsedData;
}
export default getLocalData;
