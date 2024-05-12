// TODO further test this protectedRoute, or fully rework everything in it!
// Since it always does a check when user changes routes, it slows down the load time, giving a bad user experience
// Furthermore, it is most likely far from good for SEO.


// TODO Test to add a condition which only checks the useGlobalContext.
// Since the backend requests are checked too, they will not be able to access th DB, even if they change global context in frontend

"use client";

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { redirect } from "next/navigation";
import { validateToken } from "@/auth/authTokenManager";

type ProtectedRouteProps = React.FC

function ProtectedRoute(WrappedComponent: ProtectedRouteProps) {
  return function (props: any) {
    const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
    const [isAuthenticating, setIsAuthenticating] = useState(true); 

    useEffect(() => {
      const checkAuthentication = async () => {
        setIsAuthenticating(true)
        const isValidated = await validateToken();
        setIsAuthenticated(isValidated);
        setIsAuthenticating(false)
      };
      checkAuthentication();
    }, []);

    if (isAuthenticating) return null;
    if (!isAuthenticated &&!isAuthenticating) {
      return redirect("/login");
    }

    return <WrappedComponent {...props} />;
  };
}
