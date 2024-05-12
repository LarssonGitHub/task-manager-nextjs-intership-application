import { fetchUsers } from "@/lib/api/fetchUsers";
import { createToken, getSession, setSession } from "./authTokenManager";

// TODO add much more strict validation, can be third party libs or condtions, like is it empty, is it a string

  function userExists(users: User[], email: string):User {
    const filteredUsers: User[] = users.filter(obj => obj.email === email);
    if (filteredUsers.length > 1) throw new Error("This shouldn't be possible with the hard coded values!");
    return filteredUsers[0];
  }

const passwordCheck = (userPassword: string, inputtedPassword: string) => {
    // TODO Teacher would be annoyed if he saw this, if time, implement a decrypt function.
    return userPassword === inputtedPassword;
}


const validateUser = (email: string) => {
    const users: User[] = fetchUsers();
    const user: User  | null = userExists(users, email);
    if (!user) throw new Error("Wrong password or no such email exists");
    return user;
}

const validatePassword = (user: User, password: string) => {
    const passwordMatch: boolean = passwordCheck(user.password, password)
    if (!passwordMatch) throw new Error("Wrong password or no such email exists");
    return passwordMatch;
}

export const login = async (email: string, password: string): Promise<boolean> => {
    const user: User = validateUser(email);
    validatePassword(user, password);
    const token = await createToken(user)
    setSession(token)
    console.log("token set", token)
    console.log("session got", await getSession())
    return true
}
