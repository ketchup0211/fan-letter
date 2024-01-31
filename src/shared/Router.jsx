import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Telegram from "../pages/Telegram.jsx";
import ScrollToTop from "../components/ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="telegrams/:receiver/:id" element={<Telegram />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
