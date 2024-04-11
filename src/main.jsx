import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  
  <Auth0Provider
    domain="dev-zdjubcf7ux43x6i2.us.auth0.com"
    clientId="EmHq9FZC1E05VmqqyLxVtJlpFVILuXvf"
    authorizationParams={{
      redirect_uri: window.location.origin}}>
<App />
      </Auth0Provider>
  // </React.StrictMode>
);
