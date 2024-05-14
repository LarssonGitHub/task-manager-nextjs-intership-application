import React from 'react';

interface LoggedUserCardsProps {
  categorizedUsers: Record<string, any[]>; 
}

export default function LoggedUserCards({ categorizedUsers }: LoggedUserCardsProps) {
  if (!categorizedUsers) return null;

  const loggedUserCard = Object.keys(categorizedUsers || {}).map((category, index) => (
    <dl key={index}>
      <dt>{category}:</dt>
      {categorizedUsers[category].map((user, index) => (
        <dd key={index}>{user.userName}</dd>
      ))}
    </dl>
  ));

  return (
    <>
      {loggedUserCard}
    </>
  );
}
