import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./global/styles";
import { RoutesPages } from "./routes/index.routes";

import { ProductProvider } from "./contexts/control_products";
import { v4 } from "uuid";

console.log(v4())

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
