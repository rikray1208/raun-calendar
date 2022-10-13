import React from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/navbar";

const App = () => {

    return (
        <Layout>
            <Navbar/>
            <AppRouter/>
        </Layout>
    );
};

export default App;