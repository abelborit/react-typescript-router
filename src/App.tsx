import { Suspense, lazy } from "react";
import { Navigate, Route } from "react-router-dom";

import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models";
import { RoutesWithNotFound } from "./utilities";

import "./App.css";
import { Logout } from "./components/Logout";

/* importar de manera directa los componentens de Login y Private, es decir que si se está en el login entonces el dashboard también se carga */
// import { Login } from "./pages/Login";
// import { Private } from "./pages/Private";

/* una buena práctica al aplicar el lazy loading a los componentes es que se haga en el componente padre de cada ruta */
/* importar de manera lazy los componentens de Login y Private, esto sirve para que se cargue el componente cuando recién lo necesitamos, por ejemplo si estamos en el login no necesitamos todavía el componenten de dashboard, por ende no se cargará */
const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <div className="App">
      {/* el suspense se usa cuando se vaya a usar el lazy loading, se coloca al principio y con eso ya engloba toda la aplicación */}
      <Suspense fallback={<>Cargando...</>}>
        <RoutesWithNotFound>
          {/* desde un inicio al entrar a la aplicación me tratará de redirigir a la parte privada pero si está logueado entonces podrá acceder y si no me manda al login, esa validación ya se hizo en <AuthGuard /> */}
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />

          <Route element={<AuthGuard />}>
            {/* se colocó así `${PrivateRoutes.PRIVATE}/*` porque se va a dar opción que se pueda entrar a cualquier ruta que tenga /private/cualquier_otra_ruta */}
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>

          {/* con el RoutesWithNotFound nos evitamos colocar lo de abajo por cada ruta que creemos */}
          {/* <Route path="*" element={<>NOT FOUND</>} /> */}
        </RoutesWithNotFound>

        <Logout />
      </Suspense>
    </div>
  );
}

export default App;
