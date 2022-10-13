export enum EStatus {
    PROCESSING = 'processing',
    SUCCESS = 'success',
    CANSEL = 'error',
}

export interface IEvent {
    author: string;
    guest: string;
    date: string;
    description: string;
    status: EStatus;
    id?: string;
}