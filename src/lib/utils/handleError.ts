import { destroyToken } from "@/auth/authTokenManager";

export function handleError(error: unknown) {
    console.error(error);
    if (error && typeof error === 'object' && error.hasOwnProperty('message')) {
      // @ts-ignore
      window.alert(`Error: ${error.message}`);
      return;
    } 
    window.alert('An unknown error occurred, check logs.');
}

export function handleTokenVerifyingError(error: unknown) {
  destroyToken();
  console.log(error);
  alert("Token and authentication couldn't be verified, check error logs for more info. Redirecting and destroying session....");
  window.location.href = "/login";
}