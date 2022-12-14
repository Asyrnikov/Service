import { Job } from "./job";

export interface Order {
    id: number;
    registration_date: string;
    lastname: string;
    firstname: string;
    patronymic: string;
    phone_number: string;
    // type_id: number;
    // job_id: number;
    
    // type?: Type;
    jobs?: Job[];
}