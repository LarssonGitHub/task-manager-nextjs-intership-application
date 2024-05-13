"use client";

import React from "react";
import {
  createContext,
  useContext,
  useState,
} from "react";

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
  // TODO YOU MUST CHANGE THIS TO FALSE, AND MAKE GLOBAL GLOBALCONTEXTPROVIDER PRESISTANT.
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log("global ran")
  return (
    <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);