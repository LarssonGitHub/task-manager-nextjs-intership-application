"use client"

import React from 'react';
import HelloWorld from '@/components/HelloWorld';
import ProtectedRoute from '@/components/authentication/ProtectedRoute'; // Adjust the path as necessary

// Your functional component
function Page() {
  return (
    <HelloWorld route={"dashboard"}/>
  );
}

export default ProtectedRoute(Page);
