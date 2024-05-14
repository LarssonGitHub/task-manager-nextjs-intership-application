"use client";

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { useRouter } from "next/navigation";
import { validateToken } from "@/auth/authTokenManager";
import { destroyToken } from "@/auth/authTokenManager";


export default function ProtectedRoute(Page: any) {
  return function CheckAuthentication(props: any) {
    const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
    const [shouldRender, setShouldRender] = useState<true | null>(null);
    const router = useRouter();

    const destroyUser = () => {
      destroyToken()
      router.push("/login");
    }

    const checkAuthentication = async () => {
      if (isAuthenticated) return;
      // TODO if time, try libraries or other ways to keep the global state persistent when manually changing url. 
      // Storing and using a token like this to validate if user is isAuthenticated or not on frontend might not be the best way
      // Especially when it is a front only The token is encrypted, but as it is only on frontend, it 
      const isValidated = await validateToken();
      if (!isValidated) {
      destroyUser()
      return;
      }
      setIsAuthenticated(isValidated);
      setShouldRender(true);
    };

    useEffect(() => {
      checkAuthentication();
    }, []);

    if (!shouldRender) return null;

    return <Page {...props} />;
  };
}