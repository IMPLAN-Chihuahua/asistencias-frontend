import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AssistanceForm } from '../components/Assistance/AssistanceForm';
import AssistanceScreen from '../components/Assistance/AssistanceScreen';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AssistanceForm />} />
                <Route path="/list" element={<AssistanceScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
