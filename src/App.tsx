import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./global/styles";
import { RoutesPages } from "./routes/index.routes";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <RoutesPages />
    </BrowserRouter>
  );
};
