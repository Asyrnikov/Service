import { Job } from "./job";
import { User } from "./user";

export interface Order {
    id: number;
    registration_date: string;
    paid: boolean;
    checked: boolean;
    completed: boolean;
    cost: number;
    user_id: number
    // type_id: number;
    // job_id: number;
    
    // type?: Type;
    jobs?: Job[];
    user?: User;
}