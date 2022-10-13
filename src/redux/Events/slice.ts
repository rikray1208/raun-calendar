import {createSlice} from "@reduxjs/toolkit";
import {EventsState} from "./types";
import {changeStatusEvent, deleteEvent, fetchUsers, getEvents, setEvent} from "./asyncActions";


const initialState: EventsState = {
    guests: [],
    events: [],
    isLoading: {
        guests: false,
        events: false
    },
    error: {
        guests: '',
        events: ''
    }
}

const EventsSlice = createSlice({
    name: 'events',
    initialState,

    reducers: {

    },

    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading.guests = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.guests = action.payload;
            state.isLoading.guests = false;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading.guests = false;
            alert(action.error.message);
        })

        builder.addCase(setEvent.pending, (state) => {
            state.isLoading.events = true;
        })
        builder.addCase(setEvent.fulfilled, (state, action) => {
            state.isLoading.events = false;
            state.events = [...state.events, action.payload];
        })
        builder.addCase(setEvent.rejected, (state, action) => {
            state.isLoading.events = false;
            alert(action.error.message);
        })

        builder.addCase(getEvents.pending, (state) => {
            state.isLoading.events = true;
        })
        builder.addCase(getEvents.fulfilled, (state, action) => {
            state.isLoading.events = false;
            state.events = action.payload
        })
        builder.addCase(getEvents.rejected, (state, action) => {
            state.isLoading.events = false;
            alert(action.error.message);
        })

        builder.addCase(changeStatusEvent.pending, (state) => {
            state.isLoading.events = true;
        })
        builder.addCase(changeStatusEvent.fulfilled, (state, action) => {
            state.isLoading.events = false;
            state.events = state.events.map(el => {
                if(el.id === action.payload.id) {
                    return action.payload
                }
                return el;
            })
        })
        builder.addCase(changeStatusEvent.rejected, (state, action) => {
            state.isLoading.events = false;
            alert(action.error.message);
        })

        builder.addCase(deleteEvent.pending, (state) => {
            state.isLoading.events = true;
        })
        builder.addCase(deleteEvent.fulfilled, (state, action) => {
            state.isLoading.events = false;
            state.events = state.events.filter((el) => el.id !== action.payload.id)
        })
        builder.addCase(deleteEvent.rejected, (state, action) => {
            state.isLoading.events = false;
            alert(action.error.message);
        })

    }

})

export const EventsSliceActions = EventsSlice.actions;
export default EventsSlice.reducer;