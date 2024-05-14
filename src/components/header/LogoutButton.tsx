"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { destroyToken } from '@/auth/authTokenManager';

export default function LogoutButton() {
    const router = useRouter(); 
    
    const handleLogout = () => {
        destroyToken();
        router.push(`/login`);
    };

  return (
    <button onClick={handleLogout}>Log out</button>
  );
}
