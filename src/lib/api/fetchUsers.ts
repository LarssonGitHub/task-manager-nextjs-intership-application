import { users } from "@/DB/users";

// Use a Form Library: Utilize a form handling library like React Hook Form or Formik. These libraries offer built-in validation capabilities, making it easier to enforce rules such as required fields, minimum length for passwords, and email format validation. They integrate well with UI libraries and provide a clean way to manage form state and validation logic.
export function fetchUsers(): User[] {
    // TODO if backend is implemented, rewrite all of this, and move it to a dedicated API/services folder.
    // TODO 
    // TODO validate user, if not ok, destroy cookies and send back to login!
    return users;
  }

//   Just in case! Not that it really matters, but I guess it is good practice for the mock fetch!
//   Especially when there is no encryption on the passwords!
  export function fetchNoSensitiveDataUsers(): User[] {
//  TODO only get id, email ,category and name
    return users;
  }

