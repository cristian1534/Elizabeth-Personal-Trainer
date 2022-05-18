import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { firebaseApp } from "./database/firebase";
import { FirebaseAppProvider } from "reactfire";
import { AuthProvider } from "./auth/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseAppProvider firebaseApp={firebaseApp}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </FirebaseAppProvider>
);
