import React from 'react';

interface LoggedUserCardsProps {
  categorizedUsers: Record<string, any[]>; // Assuming userAfterCategory is a record of arrays
}

export default function LoggedUserCards({ categorizedUsers }: LoggedUserCardsProps) {
  if (!categorizedUsers) return null;

  // Correctly define loggedUserCard as an array of JSX elements
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
