import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/navbar";
import {useActions, useAppSelector} from "./hooks/reduxHooks";

const App = () => {
    const { user } = useAppSelector((state) => state.Auth);
    const { fetchUsers } = useActions();
    const { getEvents } = useActions()

    useEffect(() => {
        fetchUsers();
        getEvents(user.username);
    }, [user]);

    return (
        <Layout>
            <Navbar/>
            <AppRouter/>
        </Layout>
    );
};

export default App;