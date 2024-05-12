"use client"

import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import LogoutButton from './LogoutButton';
import { useGlobalContext } from '@/context/GlobalContextProvider';

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const logoutButton = isAuthenticated ? <LogoutButton /> : null;
  return (
    <header>
      <div>
        <WelcomeMessage isAuthenticated={isAuthenticated} />
      </div>
      <div>
        {logoutButton}
      </div>
    </header>
  );
}