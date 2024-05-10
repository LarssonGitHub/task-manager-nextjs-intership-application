type Users = User[];
interface User {
    id: number;
    loggedIn: boolean;
    userName: string;
    email: string;
    password: string;
  };
  
  type Tasks = Task[];
  interface Task {
    id: number;
    taskName: string;
    user: string;
    startDate: Date;
    estimatedEndDate: Date; 
    category: string;
    importanceLevel: number;
    taskExplanations: string;
  };
  