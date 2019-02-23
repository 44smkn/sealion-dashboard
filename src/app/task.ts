export interface Task {
    id: number;
    category: string;
    name: string;
    doToday: boolean;
    deadline: Date;
    link: string;
    description: string;
}
