import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import moment, {Moment} from "moment";


interface CalendarState {
    selectedDate: Moment
}

const defaultDate = moment();

const initialState: CalendarState = {
    selectedDate: defaultDate
}


const calendarSlice = createSlice({
    name: 'calendar',
    initialState,

    reducers: {
        setDate(state, action: PayloadAction<Moment>) {
            if(action.payload) {
                state.selectedDate = action.payload;
            }
        }
    }

})

export const calendarActions = calendarSlice.actions;
export default calendarSlice.reducer;