import { SignJWT, jwtVerify } from "jose";
import { handleTokenVerifyingError } from "@/lib/utils/handleError";

// TODO use crypto to set key instead, much more secure, also, put secretKey in an environment variable!
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

// TODO: fix this TypeScript error
// https://www.youtube.com/watch?v=DJvM2lSPn6w
// EG encrypt(payLoad: JWTPayload )
export async function encrypt(payLoad: User) {
  // @ts-ignore
  return await new SignJWT(payLoad)
   .setProtectedHeader({ alg: "HS256" })
   .setIssuedAt()
   .setExpirationTime('3d')
   .sign(key);
}

export async function decrypt(token: string) {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ['HS256'] });
    return payload;
  } catch (error) {
    handleTokenVerifyingError(error)
  };
}

export async function createToken(user: User) {
  const payLoad: User = user;
  const encryptedToken = await encrypt(payLoad);
  return encryptedToken;
}

export function setSession(session: string) {
  const expires = new Date(Date.now() + 10000 * 10000000).toUTCString();
  // TODO: Once backend is set up, use HttpOnly
  // const cookieString = `session=${session}; path=/; expires=${expires}; HttpOnly`;
  document.cookie = "session=" + encodeURIComponent(session) + "; path=/; expires=" + expires;
}

// Source: https://stackoverflow.com/questions/26458125/javascript-how-to-display-only-the-value-of-a-cookie
const getTokenFromCookies = (name: string) => {
  let x = document.cookie.split(";").find(a => a.includes(name + "="));
  return!!x? x.trim().substr(name.length + 1) : "";
}

export async function getSession() {
  const token = getTokenFromCookies("session");
  if (!token) throw new Error("No token found, redirect and destroy every session");
  return await decrypt(token);
}

export async function validateToken() {
  const token = getTokenFromCookies("session");
  await decrypt(token);
  return true
}

export function destroyToken() {
  var Cookies = document.cookie.split(';');
  for (var i = 0; i < Cookies.length; i++) {
    document.cookie = Cookies[i] + "=; expires=" + new Date(0).toUTCString();
  }
}

