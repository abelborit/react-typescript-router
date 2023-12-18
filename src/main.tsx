import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /* lo que hace el StrictMode es que levanta un componente -> lo destruye -> lo vuelve a levantar y trata de usar el estado anterior. Hace esto para evaluar si se están usando por ejemplo cosas deprecadas o ver si hay algún tipo de error, por eso es que por ejemplo al hacer llamados a endpoints vemos que se hizo como una doble llamada pero eso no es así realmente. Eso solo funciona en desarrollo porque al hacer un bundler a producción eso se borra solito */
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
