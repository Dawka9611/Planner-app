import FrontPage from '../pages/FrontPage';
import Login from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';
import YearPlan from '../pages/YearPlan';
import MonthPlan from '../pages/MonthPlan';
import WeekPlan from '../pages/WeekPlan';
import DayPlan from '../pages/DayPlan';
import Performance from '../pages/Performance';
import HelpPage from '../pages/HelpPage';
import ForgotPassword from '../pages/ForgetPassword';

const Routers = () => {
    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/year-plan" element={<YearPlan />} />
            <Route path="/month-plan" element={<MonthPlan />} />
            <Route path="/week-plan" element={<WeekPlan />} />
            <Route path="/day-plan" element={<DayPlan />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/help" element={<HelpPage />} />



            <Route path="*" element={<div>404 - Хуудас олдсонгүй</div>} />
        </Routes>
        // </BrowserRouter>
    )
}

export default Routers