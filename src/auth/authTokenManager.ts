import { SignJWT, jwtVerify } from "jose";

  // TODO use cyrpto to set key instead, much more secure, also, put secretKey in an environment variable!
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

// https://www.youtube.com/watch?v=DJvM2lSPn6w
// export async function encrypt(payLoad: JWTPayload ) {
export async function encrypt(payLoad: User) {
  return await new SignJWT(payLoad)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("60 sec from now")
    .sign(key);
}

export const decrypt = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ['HS256'] });
    return payload;
  } catch (error) {
    // TODO set custom error to destroy everything if token is not ok.
    throw new Error('Token is invalid');
  }
};

export const createToken = async (user: User) => {
  const payLoad = user;
  return await encrypt(payLoad);
} 

export const setSession = (session: string) => {
  // set this expires more
  const expires = new Date(Date.now() + 10 * 10000).toUTCString();
  // TODO: Once backend is set up, use HttpOnly
  // const cookieString = `session=${session}; path=/; expires=${expires}; HttpOnly`;
  document.cookie = "session=" + encodeURIComponent(session) + "; path=/; expires=" + expires;
}

// Source: https://stackoverflow.com/questions/26458125/javascript-how-to-display-only-the-value-of-a-cookie
function getTokenFromCookies(name: string) {
  let x = document.cookie.split(";").find(a => a.includes(name + "="));
  return !!x ? x.trim().substr(name.length+1) : "";
}

export const getSession = async () => {
  const token = getTokenFromCookies("session")
  if (!token) throw new Error("No token found, redirect and destroy every session")
  return await decrypt(token);
}

export const validateToken = async () => {
  // TODO remove in production, and make sure it returns a boolean for the protectedRoute
  return true
  const token = getTokenFromCookies("session")
  await decrypt(token)
  
}

export const destroyToken = () => {
var Cookies = document.cookie.split(';');
for (var i = 0; i < Cookies.length; i++) {
  document.cookie = Cookies[i] + "=; expires="+ new Date(0).toUTCString();
}
  }
  
  