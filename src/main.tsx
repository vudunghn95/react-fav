import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Orange";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
