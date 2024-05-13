// // TODO further test this protectedRoute, or fully rework everything in it!
// // Since it always does a check when user changes routes, it slows down the load time, giving a bad user experience
// // Furthermore, it is most likely far from good for SEO.


// // TODO Test to add a condition which only checks the useGlobalContext.
// // Since the backend requests are checked too, they will not be able to access th DB, even if they change global context in frontend

// "use client";

// import React, { useState, useEffect } from "react";
// import { useGlobalContext } from "@/context/GlobalContextProvider";
// import { redirect } from "next/navigation";
// import { validateToken } from "@/auth/authTokenManager";

// type ProtectedRouteProps = React.FC

// function ProtectedRoute(WrappedComponent: ProtectedRouteProps) {
//   return function (props: any) {
//     const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
//     const [isAuthenticating, setIsAuthenticating] = useState(true); 

//     useEffect(() => {
//       const checkAuthentication = async () => {
//         setIsAuthenticating(true)
//         const isValidated = await validateToken();
//         console.log("protectedRouteran", isValidated)
//         setIsAuthenticated(false);
//         setIsAuthenticating(false)
//       };
//       checkAuthentication();
//     }, []);

//     if (isAuthenticating) return null;
//     if (!isAuthenticated &&!isAuthenticating) {
//       return redirect("/login");
//     }

//     return <WrappedComponent {...props} />;
//   };
// }

// export default ProtectedRoute;

// // https://www.youtube.com/watch?v=woaUOS8fqBw
// // https://github.com/pagecow/nextjs-13-context-api
// // https://www.freecodecamp.org/news/secure-routes-in-next-js/
// // https://www.youtube.com/watch?v=DJvM2lSPn6w


"use client";

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { redirect } from "next/navigation";
import { validateToken } from "@/auth/authTokenManager";

type ProtectedRouteProps = React.ComponentType<any>;

 function ProtectedRoute(WrappedComponent: ProtectedRouteProps) {
  const DisplayedComponent = (props: any) => {
    const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
        const [isAuthenticating, setIsAuthenticating] = useState(true); 

    
        const checkAuthentication = async () => {
          console.log(isAuthenticated)
          setIsAuthenticating(true)
          const isValidated = await validateToken();
          setIsAuthenticated(isValidated);
          setIsAuthenticating(false)
          console.log(isAuthenticated)
        };
        
        useEffect(() => {
          checkAuthentication();
        }, []);
    
        if (isAuthenticating) return null;
        if (!isAuthenticated &&!isAuthenticating) {
          return redirect("/login");
        }
    return <WrappedComponent {...props} />;
  };

  // TODO: Hack, check if it this can be rewritten to make it better
  DisplayedComponent.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return DisplayedComponent;
}

export default ProtectedRoute;

