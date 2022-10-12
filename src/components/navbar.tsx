import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useActions, useAppSelector} from "../hooks/reduxHooks";
import {Link} from "react-router-dom";
import {RouteNames} from "../routes";

const Navbar: FC = () => {
    const { isAuth, user } = useAppSelector(state => state.Auth);
    const { logout } = useActions();

    function onClick() {
        logout()
    }

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white', marginRight: 20}}>
                            {user.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                key={1}
                                onClick={onClick}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            key={1}

                        >
                            Авторизация
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;