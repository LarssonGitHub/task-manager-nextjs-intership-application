type Users = User[];
interface User {
    id: number;
    userCategory: string;
    userName: string;
    email: string;
    password: string;
  };
  
  type Tasks = Task[];
  interface Task {
    id: number;
    taskName: string;
    byUser: string;
    startDate: string;
    estimatedEndDate: string;
    category: string;
    importanceLevel: string;
    taskExplanations: string;
    taskIsComplete: boolean;
  };

  interface FilterOptions {
    byUser: string[];
    category: string[];
    importanceLevel: string[];
  }

  interface TaskOptions {
    category: string[];
    importanceLevel: number[];
  }

  interface UserOptions {
    byUser: string[];
  }

  interface FilterQuery {
    date: date | null;
    category: string | null;
    byUser: string | null;
    importanceLevel: string | null
  }

  interface WelcomeMessageProps {
    isAuthenticated: boolean;
  }
  
  interface computeTaskStatus {
    finished: number;
    pending: number;
  }

 type userAfterCategory = Record<string, User[]>;