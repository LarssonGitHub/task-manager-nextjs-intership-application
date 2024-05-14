import { users } from "@/DB/users";

export function fetchUsers(): User[] {
    return users;
}