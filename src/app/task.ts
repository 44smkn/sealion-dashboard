export interface Task {
    id: number;
    category: string;
    name: string;
    doToday: boolean;
    deadline: Date;
    description: string;
    ticketId: string;
    archive: boolean;
}
