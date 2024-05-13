import { users } from "@/DB/users";

export function fetchUsers(): User[] {
    return users;
}

export function fetchNoSensitiveDataUsers(): User[] {
    // TODO only get id, email, category, and name
    return users;
}
