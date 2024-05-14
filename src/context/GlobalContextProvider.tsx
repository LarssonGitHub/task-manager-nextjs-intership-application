"use client";

import React, { createContext, useContext, useState } from "react";

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const GlobalContext = createContext<ContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

// refactor: Cleaned up ununsed and unseary code.
