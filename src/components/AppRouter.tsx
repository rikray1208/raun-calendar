import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import AuthPage from "../pages/AuthPage";
import {useAppSelector} from "../hooks/reduxHooks";

const AppRouter: FC = () => {
    const { isAuth } = useAppSelector(state => state.Auth);

    return (
        <Routes>
            {isAuth ?
                <>
                    {
                        privateRoutes.map(route =>
                            <Route key={route.path} {...route} />
                        )
                    }
                    <Route path='*' element={<AuthPage/>}/>
                </>
                :
                <>
                    {
                        publicRoutes.map(route =>
                            <Route key={route.path} {...route} />
                        )
                    }
                    <Route path='*' element={<AuthPage/>}/>
                </>
            }
        </Routes>
    );
};

export default AppRouter;