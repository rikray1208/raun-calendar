import {createAsyncThunk} from "@reduxjs/toolkit";
import UserService from "../../api/UserService";
import {IUser} from "../../Models/IUser";
import EventsService from "../../api/EventsService";
import {IEvent} from "../../Models/IEvent";

export const fetchUsers = createAsyncThunk<IUser[]> ('events/fetchUsers',
    async () => {
        const response = await UserService.getUsers()

        return response.data
    })


export const setEvent = createAsyncThunk<IEvent, IEvent>('events/setEvent',
    async (event) => {
        const response = await EventsService.setEvents(event);

        return response.data
    })

export const getEvents = createAsyncThunk<IEvent[], string>('events/getEvent',
    async (username) => {
        const response = await EventsService.getEvents();
        return response.data.filter(el => el.author === username || el.guest === username)
    })