import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/LoginPage';
import CheckUserPage from './pages/CheckUserPage';

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" exact element={<LoginPage />}/>
            <Route path="/check-user" exact element={<CheckUserPage />}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;