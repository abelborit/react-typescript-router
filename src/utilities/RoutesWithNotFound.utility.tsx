import { Route, Routes } from "react-router-dom";

export interface Props {
  // children: React.ReactNode;
  children: JSX.Element[] | JSX.Element;
}

/* este componente nos servirá para hacer más dinámica la página 404 */
export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};
