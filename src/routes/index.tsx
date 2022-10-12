import AuthPage from "../pages/AuthPage";
import CalendarPage from "../pages/CalendarPage";
import React from "react";


export interface IRoute {
    path: RouteNames,
    element: React.ReactNode
}

export enum RouteNames {
    AUTH = '/auth',
    CALENDAR = '/calendar'
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.AUTH, element: <AuthPage /> },
];

export const privateRoutes: IRoute[] = [
    { path: RouteNames.AUTH, element: <AuthPage /> },
    { path: RouteNames.CALENDAR, element: <CalendarPage />},
];