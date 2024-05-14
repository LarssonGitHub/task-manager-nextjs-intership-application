"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { destroyToken } from '@/auth/authTokenManager';

interface LogoutButtonProps {
  setIsAuthenticated: (value: boolean) => void;
}

export default function LogoutButton({ setIsAuthenticated }: LogoutButtonProps) {   
  const router = useRouter();  
    const handleLogout = () => {
        destroyToken();
        setIsAuthenticated(false);
        router.push(`/login`);
    };

  return (
    <button onClick={handleLogout}>Log out</button>
  );
}
