import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";
import "dotenv";

const config = {
  domain: import.meta.env.VITE_APP_AUTH0_DOMAIN_KEY,
  clientId: import.meta.env.VITE_APP_AUTH0_CLIENT_ID,
  audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
};

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: config.audience,
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
