import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail.jsx";
import ScrollToTop from "../components/modules/ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/fan-letter" element={<Home />} />
        <Route path="detail/:receiver/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
