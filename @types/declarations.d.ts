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
    startDate: Date; // Assuming startDate should be a Date object
    estimatedEndDate: Date; // Assuming estimatedEndDate should be a Date object
    category: string;
    importanceLevel: number;
    taskExplanations: string;
  };
  