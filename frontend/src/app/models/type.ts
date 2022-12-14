import { Job } from "./job";

export interface Type {
    id: number;
    type: string;

    jobs: Job[];
}