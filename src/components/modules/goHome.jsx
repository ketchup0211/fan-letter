import { useNavigate } from "react-router-dom";

const goHome = () => {
  const navigate = useNavigate();
  navigate("/");
};

export default goHome;
