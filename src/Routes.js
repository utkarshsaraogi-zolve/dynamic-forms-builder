import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import StudentLoan from './Forms/StudentLoan';

export default function BaseRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/student-loan' replace />} />
                <Route path='/student-loan' exact element={<StudentLoan />} />
            </Routes>
        </BrowserRouter>
    );
}