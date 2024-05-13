import React from 'react';
import LoggedUserCards from '../../cards/userCards/LoggedUserCards';
import { getCategoryObjects } from '@/lib/utils/dataAltering';

interface LoggedUserContainerProps {
  users: Users | null;
}

const LoggedUserContainer: React.FC<LoggedUserContainerProps> = ({ users }) => {
  if (!users) return null;

  const categorizedUsers: userAfterCategory | null = getCategoryObjects(users);
  if (!categorizedUsers) return null;
  
  return (
      <LoggedUserCards categorizedUsers={categorizedUsers} />
  );
};

export default LoggedUserContainer;
