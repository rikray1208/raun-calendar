import axios, {AxiosResponse} from "axios";
import {IEvent} from "../Models/IEvent";

const EVENTS_API = 'https://630b6530f280658a59dabbf3.mockapi.io/events';

export default class EventsService {
    static async setEvents(event: IEvent): Promise<AxiosResponse<IEvent>> {
        const json = JSON.stringify(event);
        return axios.post(EVENTS_API, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    static async getEvents(): Promise<AxiosResponse<IEvent[]>> {
        return axios.get(EVENTS_API);
    }

    static async changeStatus(event: IEvent): Promise<AxiosResponse<IEvent>> {
        const json = JSON.stringify(event);
        return axios.put(EVENTS_API + `/${event.id}`, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    static async deleteEvent(event: IEvent): Promise<AxiosResponse<IEvent>> {
        return axios.delete(EVENTS_API + `/${event.id}`);
    }
}