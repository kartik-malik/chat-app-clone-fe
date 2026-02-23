import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AxiosProvider } from "./Providers/AxiosProvider.tsx";
import { QueryProvider } from "./Providers/QueryProvider.tsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;

const app = (
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <AxiosProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </AxiosProvider>
    </Auth0Provider>
  </StrictMode>
);

createRoot(document.getElementById("root")!).render(app);
