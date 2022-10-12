import {IUser} from "../../Models/IUser";
import {IEvent} from "../../Models/IEvent";

export interface EventsState {
    guests: IUser[],
    events: IEvent[],
    isLoading: {
        guests: boolean,
        events: boolean
    },
    error: {
        guests: string,
        events: string
    }
}