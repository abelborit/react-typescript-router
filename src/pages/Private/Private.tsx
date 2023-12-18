import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RoutesWithNotFound } from "../../utilities";
import { lazy } from "react";

// import { Dashboard, Home } from ".";
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));

export const Private = () => {
  return (
    <RoutesWithNotFound>
      {/* al entrar al /private y desde un inicio me tratará de redirigir al /private/dashboard */}
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />

      {/* con el RoutesWithNotFound nos evitamos colocar lo de abajo por cada ruta que creemos */}
      {/* <Route path="*" element={<>NOT FOUND</>} /> */}
    </RoutesWithNotFound>
  );
};

export default Private;
