import { useState } from "react";

function getCurrent() {
  let today = new Date();
  return today.toLocaleString();
}

export default getCurrent;
