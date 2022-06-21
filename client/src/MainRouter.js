import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './core/Home';
import Users from './user/Users';

function MainRouter() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/users" element={ <Users /> } />
            </Routes>
        </div>
    );
}

export default MainRouter;

