import React from 'react';
import { Route, Routes } from 'react-router-dom';

function MainRouter() {
    return ( <div>
        <Routes>
            <Route extract path="/" component="Home" />
        </Routes>
        </div> );
}

export default MainRouter;

