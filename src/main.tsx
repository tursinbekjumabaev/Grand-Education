import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "leaflet/dist/leaflet.css";
import "./shared/lib/leaflet";
import "@/shared/config/i18n";
import App from "./app/App";
import QueryProvider from "./app/providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="light">
      <QueryProvider>
        <App />
      </QueryProvider>
    </MantineProvider>
  </React.StrictMode>
);