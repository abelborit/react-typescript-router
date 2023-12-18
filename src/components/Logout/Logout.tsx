import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../utilities";
import { PublicRoutes } from "../../models";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/user/userSlice";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    clearLocalStorage("user");
    dispatch(resetUser());

    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return <button onClick={handleLogout}>Log Out</button>;
};
