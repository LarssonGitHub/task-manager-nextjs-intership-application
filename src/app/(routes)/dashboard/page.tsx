"use client"

import React from 'react';
import ProtectedRoute from '@/components/protectedRoutes/ProtectedRoute'; 
import TaskCardManagementContainer from '@/components/containers/TaskCardManagementContainer';

// Your functional component
function Page() {
  return (
<TaskCardManagementContainer/>
  );
}

export default ProtectedRoute(Page);
