import {RootState, store} from "../redux/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {authActions} from "../redux/Auth/slice";
import {login} from "../redux/Auth/asyncActions";
import {EventsSliceActions} from "../redux/Events/slice";
import {changeStatusEvent, deleteEvent, fetchUsers, getEvents, setEvent} from "../redux/Events/asyncActions";

const actions = {
    ...authActions,
    ...EventsSliceActions,
    fetchUsers,
    login,
    setEvent,
    getEvents,
    changeStatusEvent,
    deleteEvent
}

export const useActions = () => {
    const dispath = useDispatch();
    return bindActionCreators(actions, dispath)
}

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;