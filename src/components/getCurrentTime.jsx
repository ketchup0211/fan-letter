import { useState } from "react";

function getCurrentTime() {
  let today = new Date();
  return today.toLocaleString();
}

export default getCurrentTime;
