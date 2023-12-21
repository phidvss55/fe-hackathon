// eslint-disable-next-line import/no-unresolved
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "./polyfill";

import React from "react";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-tailwind/react";
import ReactDOM from "react-dom/client";
import { customTheme } from "assets/theme/custom-theme";
import App from "./App";
import reportWebVitals from "./report-web-vitals";
import { persistor, store } from "./core/store";

import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/spinner/spinner";
import i18n from "./assets/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18n.config();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner show />} persistor={persistor}>
        <ThemeProvider value={customTheme}>
          <App />
          <Spinner />
          <ToastContainer
            position="top-right"
            autoClose={4000}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
