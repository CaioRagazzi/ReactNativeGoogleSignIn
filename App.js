import React from 'react';
import Navigation from "./navigation";
import { NativeBaseProvider } from "native-base";

import AuthProvider from "./contexts/auth";

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
