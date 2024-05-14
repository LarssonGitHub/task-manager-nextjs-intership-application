import React from 'react';
import LoggedUserCards from '../../cards/userCards/LoggedUserCards';
import { getCategoryUserByCategory } from '@/lib/utils/dataAltering';

interface LoggedUserContainerProps {
  users: Users | null;
}

// const LoggedUserContainer: React.FC<LoggedUserContainerProps> = ({ users }) => {
//   if (!users) return null;

//   const categorizedUsers: userAfterCategory | null = getCategoryUserByCategory(users);
//   if (!categorizedUsers) return null;
  
//   return (
//       <LoggedUserCards categorizedUsers={categorizedUsers} />
//   );
// };

// export default LoggedUserContainer;

export default function LoggedUserContainer({ users }: LoggedUserContainerProps) {
  if (!users) return null;

  const categorizedUsers: userAfterCategory | null = getCategoryUserByCategory(users);
  if (!categorizedUsers) return null;
  
  return (
    <LoggedUserCards categorizedUsers={categorizedUsers} />
  );
}
