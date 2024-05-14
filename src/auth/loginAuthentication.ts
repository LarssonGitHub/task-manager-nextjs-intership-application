import { fetchUsers } from "@/lib/api/fetchUsers";
import { createToken, setSession } from "./authTokenManager";

// TODO: check over these functions, clean them up, and debug them.
const userExists = (users: Users, email: string): User | null => {
  if (!Array.isArray(users))
    throw new Error("Users aren't in an array");
  const getUsers: Users = users.filter(user => user.email === email);
  if (getUsers.length > 1)
    throw new Error("Multiple users found with the same email address.");
  if (getUsers.length === 0)
    return null;
  return getUsers[0];
}

const passwordCheck = (userPassword: string, submittedPassword: string) => {
  if (typeof submittedPassword!== "string") throw new Error("Wrong password format");
  return userPassword === submittedPassword;
};

const validateUser = (email: string) => {
  const users: Users = fetchUsers();
  const user: User | null = userExists(users, email);
  if (!user) throw new Error("Wrong password or email");
  return user;
};

const validatePassword = (user: User, password: string) => {
  const passwordMatch: boolean = passwordCheck(user.password, password);
  if (!passwordMatch) throw new Error("Wrong password or email");
  return passwordMatch;
};

const validateLoginInputs = (password: string, email: string): boolean => {
  if (!password) throw new Error("Password required");
  if (!email) throw new Error("Email required");
  if (!email.includes("@")) throw new Error("Invalid email string");
  return true;
};

const createSession = async (user: User) => {
  const token = await createToken(user);
  setSession(token);
  return true;
};

export async function login (email: string, submittedPassword: string): Promise<boolean> {
  const inputs: boolean = validateLoginInputs(submittedPassword, email);
  if (!inputs) throw new Error("Invalid inputs");
  const user: User = validateUser(email);
  if (!user) throw new Error("Couldn't get a user");
  const password: boolean = validatePassword(user, submittedPassword);
  if (!password) throw new Error("Problem validating password");
  const createdSession = await createSession(user);
  if (!createdSession) throw new Error("Couldn't create a session");
  return true;
};
