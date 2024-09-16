import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as csMessages } from "./locales/cs/messages";

import Inbox from "./components/Inbox.tsx";
import App from "./App.tsx";

import "./index.css";

i18n.load({
  en: enMessages,
  cs: csMessages,
});
i18n.activate("cs");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
      <Inbox />
    </I18nProvider>
  </StrictMode>
);
