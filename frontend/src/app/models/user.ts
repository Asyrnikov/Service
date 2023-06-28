// User interface
export interface User {
    id: number;
    firstname: string;
    lastname: string;
    phone_number: string;
    email: string;
    password: string;
    password_confirmation: string;
  
    roles?: [];
  }