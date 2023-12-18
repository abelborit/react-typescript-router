import { useDispatch } from "react-redux";
import { getMorty } from "../../services";
import { createUser, resetUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* se utiliza este useEffect() para que cuando el usuario ingrese al login y por ende este componente se monte, entonces resetear todos los datos, es decir simular que el usuario hizo logout y reseteó todo */
  useEffect(() => {
    clearLocalStorage("user");
    dispatch(resetUser());

    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();

      dispatch(createUser(result));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Login;
