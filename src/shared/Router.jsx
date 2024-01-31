import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Telegram from "../pages/Telegram.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="telegram" element={<Telegram />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
