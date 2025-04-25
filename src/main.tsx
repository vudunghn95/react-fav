import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Orange from "./Orange";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Orange />
  </StrictMode>
);
