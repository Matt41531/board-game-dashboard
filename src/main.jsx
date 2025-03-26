import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Base from "./layouts/base.jsx";
import { Toaster } from "@/components/ui/sonner";
import App from "./App.jsx";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <Base>
        <App />
      </Base>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
