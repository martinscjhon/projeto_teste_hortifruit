import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ProductProvider } from "./contexts/control_products";
import { GlobalStyle } from "./global/styles";
import { RoutesPages } from "./routes/index.routes";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <ProductProvider>
        <RoutesPages />
      </ProductProvider>
    </BrowserRouter>
  );
};
