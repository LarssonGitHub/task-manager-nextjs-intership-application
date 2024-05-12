import React from 'react';

interface User {
  id: number;
  userCategory: string;
  userName: string;
}

interface LoggedUserContainerProps {
  users: User[] | null;
}

type GroupedUsers = Record<string, User[]>;

const getDynamicUserObject = (users: User[] | null): GroupedUsers | null => {
  if (!users) return null;
  return users.reduce((total: GroupedUsers, user: User) => {
    const key = user.userCategory;
    if (!total[key]) {
      total[key] = [];
    }
    total[key].push(user);
    return total;
  }, {});
}

const LoggedUserContainer: React.FC<LoggedUserContainerProps> = ({ users }) => {
  if (!users) return "loading";

  const categorizedUsers = getDynamicUserObject(users);

  const listOfUsers = Object.keys(categorizedUsers || {}).map((category, index) => (
    <dl key={index}>
      <dt>{category}:</dt>
      {categorizedUsers && categorizedUsers[category].map((user, index) => (
        <dd key={index}>{user.userName}</dd>
      ))}
    </dl>
  ));

  return (
    <section>
      {listOfUsers}
    </section>
  );
};

export default LoggedUserContainer;
