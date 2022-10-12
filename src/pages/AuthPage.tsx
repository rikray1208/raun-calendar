import React from 'react';
import {Card, Layout, Row} from "antd";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <AuthForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default AuthPage;