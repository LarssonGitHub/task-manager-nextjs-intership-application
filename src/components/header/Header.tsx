"use client"

import React from 'react';
import WelcomeMessage from './TaskCountMessage';
import LogoutButton from './LogoutButton';
import { useGlobalContext } from '@/context/GlobalContextProvider';

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useGlobalContext();
  const logoutButton = isAuthenticated ? <LogoutButton setIsAuthenticated={setIsAuthenticated} /> : null;
  return (
    <header>
      <div className='header-content'>
    <div>
        <p>Welcome to your favorite task manager!!</p>
        <WelcomeMessage isAuthenticated={isAuthenticated} />
      </div>
      <div>
        {logoutButton}
      </div>
      </div>
    </header>
  );
}