"use client";

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { redirect } from "next/navigation";

type ProtectedRouteProps = React.FC

function ProtectedRoute(WrappedComponent: ProtectedRouteProps) {
  return function (props: any) {
    const { isAuthenticated, setIsAuthenticated } = useGlobalContext();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // TODO replace with real authentication logic
      setIsAuthenticated(true); 
      setIsLoading(false); 
      if (!isAuthenticated &&!isLoading) {
        return redirect("/"); 
      }
    }, []);

    if (isLoading) return null; 

    // TODO test if redirect should be done conditionally here instead 
    return <WrappedComponent {...props} />;
  };
}

export default ProtectedRoute;

// https://www.youtube.com/watch?v=woaUOS8fqBw
// https://github.com/pagecow/nextjs-13-context-api
// https://www.freecodecamp.org/news/secure-routes-in-next-js/
