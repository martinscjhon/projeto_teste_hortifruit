import { BrowserRouter } from "react-router-dom";
import { RoutesPages } from "./routes/index.routes";
import { GlobalStyle } from "./global/styles";
import type { FC } from "react";
import { ToastContainer } from 'react-toastify';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <RoutesPages />
    </BrowserRouter>
  );
};
