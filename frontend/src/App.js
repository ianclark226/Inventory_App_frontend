import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CheckUserPage from "./pages/CheckUserPage"
import 'antd/dist/antd.min.css'
import './style.scss';


const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/login" exact element={<LoginPage />}/> */}
            <Route path="/check-user" exact element={<CheckUserPage />}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;