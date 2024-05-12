"use client"

import React from 'react'
import { destroyToken } from '@/auth/authTokenManager'

export default function LogoutButton() {

    const handleLogout = () => {
        destroyToken()
        // TODO add redirect
        alert("Token destroyed")
    }

  return (
    <button onClick={handleLogout}>Log out</button>
  )
}
