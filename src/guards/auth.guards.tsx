import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppStore } from "../redux/store";
import { PublicRoutes } from "../models";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.name ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};
