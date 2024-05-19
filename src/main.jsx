import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <RouterProvider router={AppRouter}>
      <App />
      <ToastContainer />
    </RouterProvider>
    {/* </PersistGate> */}
  </Provider>
);
