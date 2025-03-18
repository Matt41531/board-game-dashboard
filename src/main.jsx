import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Base from "./layouts/base.jsx";
import { Toaster } from "@/components/ui/sonner";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Base>
      <App />
    </Base>
    <Toaster />
  </StrictMode>,
);
